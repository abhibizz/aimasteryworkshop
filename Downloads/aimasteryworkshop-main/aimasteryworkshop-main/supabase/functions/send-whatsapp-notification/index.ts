import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, phone, name, email, workshopName, sundayWorkshop, paymentId } = await req.json();

    if (!phone || !name || !type) {
      return new Response(JSON.stringify({ error: 'Missing required fields: phone, name, type' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('INTERAKT_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Interakt API key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Clean phone number
    let cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
      cleanPhone = cleanPhone.substring(2);
    }
    if (cleanPhone.length !== 10) {
      return new Response(JSON.stringify({ error: 'Invalid phone number' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Duplicate protection: check if already sent for this payment
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    if (paymentId) {
      const { data: existing } = await supabase
        .from('whatsapp_notifications')
        .select('id')
        .eq('phone', cleanPhone)
        .eq('payment_id', paymentId)
        .eq('type', type)
        .maybeSingle();

      if (existing) {
        console.log('⚠️ Duplicate WhatsApp notification skipped:', { phone: cleanPhone, paymentId, type });
        return new Response(JSON.stringify({ success: true, skipped: true, reason: 'duplicate' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    const isSuccess = type === 'success';
    const templateName = isSuccess ? 'iitk_success' : 'iitk_fail';
    const satWorkshop = workshopName || 'None';
    const sunWorkshop = sundayWorkshop || 'None';

    const templateData: Record<string, unknown> = {
      name: templateName,
      languageCode: "en",
      bodyValues: [name, email || '', satWorkshop, sunWorkshop],
      headerValues: ['https://aylence.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-04-at-7.34.17-PM.jpeg'],
    };

    const payload = {
      countryCode: "+91",
      phoneNumber: cleanPhone,
      type: "Template",
      callbackData: `payment_${type}_${Date.now()}`,
      template: templateData,
    };

    console.log('📤 Interakt Payload:', JSON.stringify(payload));

    const response = await fetch('https://api.interakt.ai/v1/public/message/', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log('📥 Interakt Response:', JSON.stringify(result));

    if (!response.ok) {
      console.error('❌ Interakt API error:', result);
      return new Response(JSON.stringify({ error: 'WhatsApp message failed', details: result }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Record sent notification for dedup
    await supabase.from('whatsapp_notifications').insert({
      phone: cleanPhone,
      payment_id: paymentId || null,
      type,
      interakt_message_id: result?.id || null,
    });

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ WhatsApp notification error:', error);
    return new Response(JSON.stringify({ error: error.message || 'WhatsApp notification failed' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
