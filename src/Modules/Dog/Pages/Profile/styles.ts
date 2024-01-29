import styled, { css } from "styled-components/native";
import { View, Text, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled(View)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const WrapperAvatar = styled(View)`
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const Avatar = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 50px;
`;

export const TextProfile = styled(Text)`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_700};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  line-height: 25px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
