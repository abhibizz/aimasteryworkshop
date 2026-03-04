import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PIXEL_ID = '2838674293153150';

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get('META_ACCESS_TOKEN');
    if (!accessToken) {
      console.error('META_ACCESS_TOKEN not configured');
      return new Response(JSON.stringify({ error: 'Meta integration not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const payload = await req.json();
    const { event_name, email, phone, event_source_url, event_id, test_event_code } = payload;

    const hashedEmail = email ? await sha256(email) : undefined;
    const hashedPhone = phone ? await sha256(phone.replace(/\D/g, '')) : undefined;

    const userData: Record<string, any> = {};
    if (hashedEmail) userData.em = [hashedEmail];
    if (hashedPhone) userData.ph = [hashedPhone];

    const eventData: Record<string, any> = {
      event_name: event_name || 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      user_data: userData,
      event_id: event_id || crypto.randomUUID(),
    };

    if (event_source_url) {
      eventData.event_source_url = event_source_url;
    }

    const requestBody: Record<string, any> = { data: [eventData] };
    if (test_event_code) {
      requestBody.test_event_code = test_event_code;
    }

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${accessToken}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const result = await response.text();
    console.log('Meta CAPI response:', response.status, result);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Meta CAPI error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send event' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
