import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { Header } from '@Components/Header';
import { Button } from '@Components/Button';
import { Container, Logo, WrapperInput, ContainerLogo, Title } from './styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';

import LogoPng from '@Assets/logo.png';

export function SignIn() {
 
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <Container>
        <ContainerLogo>
      <Logo 
        source={LogoPng}
        />
        <Title>Acesse sua conta</Title>
        </ContainerLogo>
      
      <WrapperInput>
      <Input
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <ButtonIcon
          icon='email'
        />
      </WrapperInput>
      <WrapperInput>
        <Input
          placeholder='Senha'
          secureTextEntry
          autoCorrect={false}
        />
        <ButtonIcon
          icon='visibility'
        />
      </WrapperInput>
        
      <Button title='Acessar'/>
      

     
        
        <Button 
          title='Cria conta'
          type = 'SECONDARY'
        />
      
        
      </Container>
    </TouchableWithoutFeedback>
  );
}

