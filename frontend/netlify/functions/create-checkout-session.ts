// functions/create-checkout-session.ts

import type { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2023-10-16',
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { amount, currency } = JSON.parse(event.body!);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          // Define the donation amount and currency dynamically
          price_data: {
            currency,
            unit_amount: amount,
            product_data: {
              name: 'Donation',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://fomas.ne/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:4321/cancel.html`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: `Server Error: ${error.message}`,
    };
  }
};

export { handler };
