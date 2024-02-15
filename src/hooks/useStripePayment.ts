import { useStripe } from '@stripe/stripe-react-native';
import { useContext, useState } from 'react';
import { fetchPaymentSheetParams } from '../api/stripeAPI.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CartParamsList } from '../types';
import { CartContext } from '../context/CartContext.ts';

const useStripePayment = (amount: number) => {
  const { clearCart } = useContext(CartContext);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const navigation: NavigationProp<CartParamsList> = useNavigation();

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams(amount);

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'DishDash Restaurant',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: false,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    setLoading(true);
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      setLoading(false);
      navigation.navigate('CheckoutError', { error: error.message });
    } else {
      setLoading(false);
      navigation.navigate('CheckoutSuccess');
      clearCart();
    }
  };

  return { openPaymentSheet, loading, initializePaymentSheet };
};
export default useStripePayment;
