import styled from "styled-components/native";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const WrapperInput = styled(View)`
  width: 100%;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;

export const Header = styled(View)`
  width: 100%;
  height:${ RFPercentage(20)}px;
  background-color: ${({ theme }) => theme.COLORS.VIOLET_700};

  align-items: center;
  justify-content: center;
`;