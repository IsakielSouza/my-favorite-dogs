
import styled from "styled-components/native";

export const DogWrapper = styled.View`
  margin: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme })=>theme.COLORS.WHITE};
`;

export const DogImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 350px;
  margin-top: 10px;
  border-radius: 8px;
`;

export const SeparatorItem = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.VIOLET_700};
`;