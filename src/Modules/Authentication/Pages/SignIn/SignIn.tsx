import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { Header } from '@Components/Header';
import { Button } from '@Components/Button';
import { Container } from './styles';
import { Input } from '@Components/Input';
import { ListEmpty } from '@Components/ListEmpty';

export function SignIn() {
 
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <Container>
        <Header/>
        <Text>SignIn</Text>
      <Input 
        placeholder='Email'
        inputMode={'email'}
        
      ></Input>
      <Input 
        placeholder='Senha'
        secureTextEntry
        autoCorrect={false}
        returnKeyType='go'
        
      ></Input>
        <Button title='Entrar'></Button>
        <Button title='Cria nova conta' type = 'SECONDARY' ></Button>
        
        <Text></Text>
      </Container>
    </TouchableWithoutFeedback>
  );
}

