/* import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe.js


const CheckoutForm = () => {
  const stripe = useStripe()!
  const elements = useElements()!
// 
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Get the client secret from your server
    const clientSecret = process.env.PUBLIC_STRIPE || "pk_test_51OrnI1D2yRGzZjIlXz5Oz6nbokWF4g4BNiUgU3dHnnijbgmyVT7NqvYGsULRUUCDrwYHF2zIuKE2Ar6i1iyEkVc500NMYSmfbM"

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
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

const App = () => {
  const key = process.env.PUBLIC_STRIPE! || "pk_test_51OrnI1D2yRGzZjIlXz5Oz6nbokWF4g4BNiUgU3dHnnijbgmyVT7NqvYGsULRUUCDrwYHF2zIuKE2Ar6i1iyEkVc500NMYSmfbM"
  console.log(key);
  const stripePromise = loadStripe(key);
  return(
    <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
  )
}

export default App; */