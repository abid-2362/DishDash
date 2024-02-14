import axios from 'axios';

const API_URL = 'http://192.168.136.172:5000';
export const fetchPaymentSheetParams = async () => {
  const response = await axios.post(`${API_URL}/stripe/payment-sheet`);
  const { paymentIntent, ephemeralKey, customer, publishableKey } = await response.data;

  const data = {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey,
  };
  console.log('stripeAPI.ts', data);
  return data;

  // const response = await fetch(`${API_URL}/payment-sheet`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
};
