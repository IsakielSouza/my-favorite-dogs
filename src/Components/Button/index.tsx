import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  disable?: boolean;
}

export function Button({ title, type = 'PRIMARY', disabled = false, ...rest }: Props) {
  return (
    <Container type={type} {...rest} disabled={disabled}>
      <Title type={type}>{title}</Title>
    </Container>
  )
}