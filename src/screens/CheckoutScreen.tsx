import { fetchPaymentSheetParams } from '../api/stripeAPI.ts';
import { useEffect, useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import { Screen } from '../components/common/styles/CommonStyles.ts';
import { Button } from 'react-native-paper';
import { colors } from '../theme/colors.ts';
import Spacer from '../components/common/Spacer.tsx';
import styled from 'styled-components/native';
import { Alert } from 'react-native';

const StyledScreen = styled(Screen)`
  border: 1px solid red;
  justify-content: flex-end;
`;
export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  // import {fetchPaymentSheetParams} from

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
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
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet().catch(error => {
      console.log('CheckoutScreen.tsx', 'error', error);
    });
  }, []);

  return (
    <StyledScreen>
      <Spacer position={'horizontal'} size={'large'}>
        <Button
          textColor={colors.text.inverse}
          buttonColor={colors.brand.primary}
          disabled={!loading}
          onPress={openPaymentSheet}>
          Checkout
        </Button>
      </Spacer>
    </StyledScreen>
  );
}
