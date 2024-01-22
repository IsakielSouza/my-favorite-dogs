import styled from "styled-components/native";
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
  height:${RFPercentage(25)}px;
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
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DogWrapper = styled.View`
  padding: 8px;
  background-color: ${({theme})=>theme.COLORS.GRAY_100};
`;

export const DogImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 70%;
  margin-top: 10px;
  border-radius: 6px;
`;