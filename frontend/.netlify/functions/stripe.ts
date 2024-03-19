import Stripe from 'stripe';
import { Handler } from '@netlify/functions';

const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: '2023-10-16',
});

const handler: Handler = async (event, context) => {
  if (!event.body) {
    // Handle the case when event.body is null
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Request body is missing' }),
    };
  }

  // Safely parse the event body
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON in request body' }),
    };
  }

  const donationAmount = body.amount; // Assume amount is passed in request body

  // Validate donation amount
  if (typeof donationAmount !== 'number' || donationAmount < 100) { // Stripe requires amount to be at least 100 cents (1 USD)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid donation amount' }),
    };
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation',
          },
          unit_amount: donationAmount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://fomas.netlify.app/payment-success',
    cancel_url: 'https://fomas.netlify.app/payment-failure',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};

export { handler };
