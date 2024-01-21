import { TextInputProps, Keyboard } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      onSubmitEditing={Keyboard.dismiss}
      cursorColor={COLORS.VIOLET_700}
      {...rest} 
    />
  )
}