import styled from 'styled-components/native';
import { Text } from '../Text.tsx';

export const Screen = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: ${props => props.theme.fontSizes.title};
  text-align: center;
`;
