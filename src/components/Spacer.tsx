import * as React from 'react';
import { StyleSheet, View } from 'react-native';

interface ISpacerProps {
  children?: any;
  vertical?: boolean;
  horizontal?: boolean;
}

const Spacer = ({ children, horizontal, vertical }: ISpacerProps) => (
  <View style={styles(horizontal, vertical).spacer}>{children}</View>
);

Spacer.defaultProps = {
  vertical: true,
  horizontal: true,
};

const styles = (horizontal: boolean | undefined, vertical: boolean | undefined) => {
  return StyleSheet.create({
    spacer: {
      marginVertical: vertical ? 15 : 0,
      marginHorizontal: horizontal ? 15 : 0,
    },
  });
};

export default Spacer;
