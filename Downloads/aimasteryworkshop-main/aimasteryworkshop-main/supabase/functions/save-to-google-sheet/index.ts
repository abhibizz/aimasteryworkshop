import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const appsScriptUrl = Deno.env.get('GOOGLE_APPS_SCRIPT_URL');

    if (!appsScriptUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL not configured');
      return new Response(JSON.stringify({ error: 'Sheet integration not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: payload.timestamp || new Date().toISOString(),
        firstName: payload.firstName || '',
        lastName: payload.lastName || '',
        email: payload.email || '',
        phone: payload.phone || '',
        saturdayWorkshop: payload.saturdayWorkshop || '',
        sundayWorkshop: payload.sundayWorkshop || '',
        amount: payload.amount || 0,
        paymentId: payload.paymentId || '',
        orderId: payload.orderId || '',
        utm_source: payload.utm_source || '',
        utm_medium: payload.utm_medium || '',
        utm_campaign: payload.utm_campaign || '',
        utm_term: payload.utm_term || '',
        utm_content: payload.utm_content || '',
        landingPage: payload.landingPage || '',
      }),
    });

    // Apps Script redirects on POST, follow it
    const text = await response.text();
    console.log('Google Sheet response:', response.status, text);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    return new Response(JSON.stringify({ error: 'Failed to save data' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
