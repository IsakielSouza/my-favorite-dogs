import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  height:${ RFPercentage(20)}px;
  background-color: ${({ theme }) => theme.COLORS.VIOLET_700};

  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: ${ RFValue(55)}px;
  height: ${ RFValue(55)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 16px;
`;

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
  font-size: ${ theme.FONT_SIZE.MD}px;
  color: ${ theme.COLORS.WHITE};
  font-family: ${ theme.FONT_FAMILY.REGULAR};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.WHITE};
    font-size: ${ theme.FONT_SIZE.LG}px;
    font-family: ${ theme.FONT_FAMILY.BOLD};
  `}
`;
