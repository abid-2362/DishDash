import styled from 'styled-components/native';
import { ThemeType } from '../../theme';

const defaultTextStyles = (theme: ThemeType) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: ThemeType) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: ThemeType) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: ThemeType) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: ThemeType) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ThemeType) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

type Variant = keyof typeof variants;

export const Text = styled.Text<{ variant?: Variant }>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => {
    if (!variant || !variants[variant]) {
      return body(theme);
    }
    return variants[variant](theme);
  }}
`;

Text.defaultProps = {
  variant: 'body',
};
