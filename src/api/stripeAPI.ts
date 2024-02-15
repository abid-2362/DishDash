import axios from 'axios';

const API_URL = 'http://192.168.136.172:5000';
export const fetchPaymentSheetParams = async (amount: number) => {
  const response = await axios.post(`${API_URL}/stripe/payment-sheet`, {
    amount: amount,
  });
  const { paymentIntent, ephemeralKey, customer, publishableKey } = await response.data;

  const data = {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey,
  };
  return data;
};
