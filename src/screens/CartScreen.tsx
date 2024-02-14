import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.ts';
import { Screen } from '../components/common/styles/CommonStyles.ts';
import Spacer from '../components/common/Spacer.tsx';
import { Button, List } from 'react-native-paper';
import { colors } from '../theme/colors.ts';
import styled from 'styled-components/native';
import { calculatePrice, calculateSum } from '../utils/utils.ts';

const StyledButton = styled(Button)`
  padding: ${props => props.theme.space[1]};
  width: 90%;
  align-self: center;
  margin-bottom: 10px;
`;

type CartScreenProps = {};
const CartScreen = ({}: CartScreenProps) => {
  const { state, clearCart } = useContext(CartContext);

  const sum = calculateSum(state.items);

  if (!state.currentRestaurant) {
    return <Text>No Restaurant</Text>;
  }

  return (
    <Screen>
      <Spacer position={'horizontal'} size={'medium'}>
        <SingleRestaurantCard restaurant={state.currentRestaurant} />
      </Spacer>
      <ScrollView>
        <List.Section title={'Cart Items'}>
          {state.items.map((item, index) => {
            return (
              <List.Item
                key={`${item.restaurantId}-${index}`}
                title={`${item.name}: $${calculatePrice(item.price)}`}
              />
            );
          })}
        </List.Section>

        <Spacer size={'large'} position={'vertical'} />
      </ScrollView>
      <StyledButton
        buttonColor={colors.brand.primary}
        textColor={colors.text.inverse}
        disabled={sum <= 0}
        // disabled={true}
        mode="contained"
        icon={'currency-usd'}>
        Pay {sum}
      </StyledButton>
      <StyledButton
        buttonColor={colors.text.error}
        textColor={colors.text.inverse}
        mode="contained"
        onPress={clearCart}>
        Clear Cart
      </StyledButton>
    </Screen>
  );
};

export default CartScreen;
