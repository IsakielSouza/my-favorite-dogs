
import styled from "styled-components/native";

export const DogWrapper = styled.View`
  padding: 8px;
  background-color: ${({ theme })=>theme.COLORS.GRAY_100};
`;

export const DogImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 350px;
  margin-top: 10px;
  border-radius: 6px;
`;