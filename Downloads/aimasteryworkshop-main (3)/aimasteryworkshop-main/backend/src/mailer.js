const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or use host/port for other SMTP providers
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = async (userDetails, paymentDetails) => {
  const { name, email, workshop, venue, timing } = userDetails;
  const { paymentId, amount } = paymentDetails;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
      <h2 style="color: #2c3e50; text-align: center;">Registration Confirmed! 🎉</h2>
      <p style="color: #555; font-size: 16px;">Hi <strong>${name}</strong>,</p>
      <p style="color: #555; font-size: 16px;">Thank you for registering for the Aylence x Techkriti 2026 event. Your payment was successful.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333;">Workshop Details</h3>
        <p style="margin: 5px 0; color: #555;"><strong>Workshop:</strong> ${workshop}</p>
        <p style="margin: 5px 0; color: #555;"><strong>Venue:</strong> ${venue}</p>
        <p style="margin: 5px 0; color: #555;"><strong>Timing:</strong> ${timing}</p>
      </div>

      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333;">Payment Summary</h3>
        <p style="margin: 5px 0; color: #555;"><strong>Amount Paid:</strong> ₹${amount / 100}</p>
        <p style="margin: 5px 0; color: #555;"><strong>Payment ID:</strong> <span style="font-family: monospace;">${paymentId}</span></p>
      </div>

      <p style="color: #777; font-size: 14px; text-align: center; margin-top: 30px;">
        If you have any questions, feel free to reply to this email.<br>
        See you at IIT Kanpur!
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"Aylence Events" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Booking Confirmed: ${workshop} at Techkriti 2026`,
    html: htmlContent,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendConfirmationEmail };