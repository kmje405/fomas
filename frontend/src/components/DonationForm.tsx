import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe.js
const stripePromise = loadStripe('process.env.STRIPE_PUBLIC_KEY');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
// 
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the client secret from your server
    const clientSecret = 'process.env.STRIPE_CLIENT_SECRET';

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Submit Payment</button>
    </form>
  );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default App;