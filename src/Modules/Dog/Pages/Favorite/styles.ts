import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  height:${ RFPercentage(20)}px;
  background-color: ${({ theme }) => theme.COLORS.VIOLET_700};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.WHITE};
    font-size: ${ theme.FONT_SIZE.LG}px;
    font-family: ${ theme.FONT_FAMILY.BOLD};
  `}
`;
