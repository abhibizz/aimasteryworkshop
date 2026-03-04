import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const successTemplate = (name: string, workshopName: string, amount: number, paymentId: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background:#ffffff;color:#222222;line-height:1.7">
<div style="max-width:640px;margin:0 auto;padding:32px 24px">
  <p style="margin:0 0 20px;font-size:15px">Dear ${name},</p>

  <p style="margin:0 0 16px;font-size:15px">🎉 Congratulations! Your booking for the <strong>${workshopName}</strong> has been confirmed.</p>

  <p style="margin:0 0 4px;font-size:15px"><strong>Booking Details</strong></p>
  <p style="margin:0 0 4px;font-size:15px">• Workshop: ${workshopName}</p>
  <p style="margin:0 0 4px;font-size:15px">• Amount Paid: ₹${amount.toLocaleString('en-IN')}</p>
  <p style="margin:0 0 24px;font-size:15px">• Payment ID: ${paymentId}</p>

  <p style="margin:0 0 4px;font-size:15px">📋 <strong>What's Next?</strong></p>
  <p style="margin:0 0 4px;font-size:15px">• You will receive joining details via WhatsApp/Email before the event.</p>
  <p style="margin:0 0 4px;font-size:15px">• Keep your Payment ID handy for check-in.</p>
  <p style="margin:0 0 24px;font-size:15px">• Join our WhatsApp group for updates.</p>

  <p style="margin:0 0 4px;font-size:15px">🔐 <strong>Security Reminder</strong></p>
  <p style="margin:0 0 4px;font-size:15px">We will never ask for your OTP, bank details, or any confidential financial information.</p>
  <p style="margin:0 0 24px;font-size:15px">All payments are processed securely for your safety.</p>

  <p style="margin:0 0 24px;font-size:15px">If you have any questions or need assistance, feel free to reply to this email and our team will be happy to help.</p>

  <p style="margin:0 0 24px;font-size:15px">We look forward to seeing you at the workshop!</p>

  <p style="margin:0 0 4px;font-size:15px">Warm regards,</p>
  <p style="margin:0;font-size:15px"><strong>Team Aylence</strong></p>
</div>
</body>
</html>`;

const failedTemplate = (name: string, workshopName: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background:#ffffff;color:#222222;line-height:1.7">
<div style="max-width:640px;margin:0 auto;padding:32px 24px">
  <p style="margin:0 0 20px;font-size:15px">Dear ${name},</p>

  <p style="margin:0 0 16px;font-size:15px">We noticed that your recent payment attempt for the <strong>${workshopName}</strong> was unsuccessful or incomplete.</p>

  <p style="margin:0 0 24px;font-size:15px">This can sometimes happen due to network issues, bank authentication failures, or interruptions during the payment process.</p>

  <p style="margin:0 0 4px;font-size:15px">⚠️ <strong>Important Note</strong></p>
  <p style="margin:0 0 4px;font-size:15px">If you have already received a workshop confirmation email from us, please ignore this message.</p>
  <p style="margin:0 0 24px;font-size:15px">Your registration is already confirmed in that case.</p>

  <p style="margin:0 0 4px;font-size:15px"><strong>What you can do next</strong></p>
  <p style="margin:0 0 4px;font-size:15px">If you still wish to participate in the workshop, you may retry your payment using the registration link below:</p>
  <p style="margin:0 0 24px;font-size:15px">👉 <a href="https://kanpur.aylence.com/" style="color:#1a73e8;text-decoration:underline">https://kanpur.aylence.com/</a></p>

  <p style="margin:0 0 4px;font-size:15px">🔐 <strong>Security Reminder</strong></p>
  <p style="margin:0 0 4px;font-size:15px">We will never ask for your OTP, bank details, or any confidential financial information.</p>
  <p style="margin:0 0 24px;font-size:15px">All payments are processed securely for your safety.</p>

  <p style="margin:0 0 24px;font-size:15px">If you believe this email was sent in error or need help completing your registration, feel free to reply to this email and our team will assist you.</p>

  <p style="margin:0 0 24px;font-size:15px">Looking forward to having you join us!</p>

  <p style="margin:0 0 4px;font-size:15px">Warm regards,</p>
  <p style="margin:0;font-size:15px"><strong>Team Aylence</strong></p>
</div>
</body>
</html>`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, email, name, workshopName, amount, paymentId } = await req.json();

    if (!type || !email || !name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const gmailUser = Deno.env.get('GMAIL_USER');
    const gmailAppPassword = Deno.env.get('GMAIL_APP_PASSWORD');
    if (!gmailUser || !gmailAppPassword) {
      return new Response(JSON.stringify({ error: 'Email credentials not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const isSuccess = type === 'success';
    const subject = isSuccess
      ? `Booking Confirmed — ${workshopName}`
      : `❌ Payment Unsuccessful | ${workshopName || 'Workshop'}`;
    const html = isSuccess
      ? successTemplate(name, workshopName, amount || 0, paymentId || '')
      : failedTemplate(name, workshopName || 'Workshop');

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: gmailUser,
          password: gmailAppPassword,
        },
      },
    });

    await client.send({
      from: gmailUser,
      to: email,
      subject,
      content: "Please view this email in an HTML-capable client.",
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Email sending failed' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
