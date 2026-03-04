require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const { sendConfirmationEmail } = require('./mailer');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL, 
    methods: ['POST']
}));
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1. Create Order Endpoint
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount } = req.body; // Amount should come in from frontend (in INR)

    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Order Creation Error:', error);
    res.status(500).json({ success: false, message: 'Could not create order' });
  }
});

// 2. Verify Payment & Send Email Endpoint
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      userDetails // { name, email, workshop, venue, timing }
    } = req.body;

    // Create the expected signature using your secret key
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature' });
    }

    // Payment is genuine. Send confirmation email.
    // We wrap this in a try-catch so an email failure doesn't crash the payment success response
    try {
      // Fetch actual payment details to get exact amount paid if you don't want to trust frontend payload
      const payment = await razorpay.payments.fetch(razorpay_payment_id);
      
      await sendConfirmationEmail(userDetails, { 
        paymentId: razorpay_payment_id, 
        amount: payment.amount 
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(200).json({ success: true, message: 'Payment verified and email sent' });

  } catch (error) {
    console.error('Verification Error:', error);
    res.status(500).json({ success: false, message: 'Server error during verification' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));