import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { Header } from '@Components/Header';
import { Button } from '@Components/Button';
import { Container, BoxInput } from './styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';

export function SignIn() {
 
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <Container>
        <Header/>
        <Text>SignIn</Text>

      <BoxInput>
      <Input
        placeholder='Email'
        inputMode={'email'}
      />
      <ButtonIcon
          icon='email'
        />
      </BoxInput>
      

      <BoxInput>
        <Input
          placeholder='Senha'
          secureTextEntry
          autoCorrect={false}
          returnKeyType='go'
        />

        <ButtonIcon
          icon='visibility'
        />
      </BoxInput>

      <Button title='Entrar'></Button>
      <Button title='Cria conta' type = 'SECONDARY' ></Button>
        
      </Container>
    </TouchableWithoutFeedback>
  );
}

