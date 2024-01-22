import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.VIOLET_700 : "transparent"};
  border-width: ${({ type }) => type === 'PRIMARY' ? 0 : 1};
  border-color: ${({ theme }) => theme.COLORS.VIOLET_700 };
  border-radius: 6px;
  
  justify-content: center;
  align-items: center;

`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
  color: ${ type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.VIOLET_700 };
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

