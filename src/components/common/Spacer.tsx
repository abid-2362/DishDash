import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../theme';

type SpacerProps = {
  size?: 'small' | 'medium' | 'large';
  position?: 'top' | 'left' | 'right' | 'bottom';
  children?: React.ReactNode;
};

const Spacer: React.FC<SpacerProps> = ({ size = 'medium', position = 'bottom', children }) => {
  const getSpacerStyle = (): ViewStyle => {
    let spacerStyle: ViewStyle = {};

    switch (position) {
      case 'top':
        spacerStyle = { marginTop: getSize(size) };
        break;
      case 'left':
        spacerStyle = { marginLeft: getSize(size) };
        break;
      case 'right':
        spacerStyle = { marginRight: getSize(size) };
        break;
      case 'bottom':
        spacerStyle = { marginBottom: getSize(size) };
        break;
    }

    return spacerStyle;
  };

  const getSize = (spaceSize: 'small' | 'medium' | 'large'): number => {
    switch (spaceSize) {
      case 'small':
        return Number(theme.space[1].replace('px', ''));
      case 'medium':
        return Number(theme.space[2].replace('px', ''));
      case 'large':
        return Number(theme.space[3].replace('px', ''));
      default:
        return Number(theme.space[1].replace('px', ''));
    }
  };

  return <View style={[styles.spacer, getSpacerStyle()]}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    // Spacer styles can be customized here
  },
});

export default Spacer;
