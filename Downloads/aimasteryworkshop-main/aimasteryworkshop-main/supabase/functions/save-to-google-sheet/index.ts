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
        name: payload.firstName ? `${payload.firstName} ${payload.lastName || ''}`.trim() : (payload.name || ''),
        email: payload.email || '',
        phone: payload.phone || '',
        workshop_day1: payload.saturdayWorkshop || payload.workshop_day1 || '',
        workshop_day2: payload.sundayWorkshop || payload.workshop_day2 || '',
        amount: payload.amount || '',
        paymentId: payload.paymentId || '',
        orderId: payload.orderId || '',
        status: payload.status || '',
        page: payload.landingPage || payload.page || '',
        paymentMethod: payload.paymentMethod || '',
        utm_source: payload.utm_source || '',
        utm_medium: payload.utm_medium || '',
        utm_campaign: payload.utm_campaign || '',
        utm_term: payload.utm_term || '',
        utm_content: payload.utm_content || '',
      }),
    });

    const text = await response.text();
    console.log('Google Apps Script response status:', response.status);
    console.log('Google Apps Script response body:', text);
    console.log('Google Apps Script response URL (after redirects):', response.url);

    if (!response.ok) {
      console.error('Google Apps Script returned non-OK status:', response.status, text);
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Google Apps Script error', 
        status: response.status,
        details: text.substring(0, 500),
      }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if the response body indicates an error
    let googleResult: any = null;
    try {
      googleResult = JSON.parse(text);
    } catch {
      // Response is not JSON — could be HTML error page
      if (text.includes('Error') || text.includes('error') || text.includes('<!DOCTYPE')) {
        console.error('Google Apps Script returned non-JSON error response:', text.substring(0, 500));
        return new Response(JSON.stringify({ 
          success: false, 
          error: 'Google Apps Script returned invalid response',
          details: text.substring(0, 500),
        }), {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    if (googleResult && googleResult.status === 'error') {
      console.error('Google Apps Script reported error:', JSON.stringify(googleResult));
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Google Apps Script execution error',
        details: googleResult,
      }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Successfully saved to Google Sheet');
    return new Response(JSON.stringify({ success: true, googleResponse: googleResult }), {
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
