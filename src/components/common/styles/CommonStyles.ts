import styled from 'styled-components/native';
import { Text } from '../Text.tsx';

export const Screen = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: ${props => props.theme.fontSizes.title};
  text-align: center;
`;

export const CustomScreenContainer = styled.View`
  flex: 1;
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
`;
