import styled, { css } from 'styled-components/native';
import { View, Text, Image } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  padding-bottom: 24px;
`;

export const ContainerLogo = styled(View)`
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 100px;
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme })=> theme.FONT_SIZE.XL}px;
    color: ${ theme.COLORS.GRAY_300};
  `}
`;

export const Logo = styled(Image)`
  width: 80px;
  height: 100px;
`;

export const WrapperFooter = styled(View)`
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;
