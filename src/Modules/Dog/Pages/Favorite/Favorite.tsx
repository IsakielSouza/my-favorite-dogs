import { ButtonIcon } from '@Components/ButtonIcon';
import { Container } from './styles';
import { Text } from 'react-native';

export function Favorite() {
  return (
        <Container>
          <Text>Favorite</Text>
          <ButtonIcon
           icon='heart-broken'
          ></ButtonIcon>
        </Container>
  );
}