import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button } from '@Components/Button';
import { Container, Logo, WrapperInput, ContainerLogo, Title, WrapperFooter } from './styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';

import LogoPng from '@Assets/logo.png';

export function SignUp() {
 
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Container>
          <ContainerLogo>
        <Logo 
          source={LogoPng}
          />
          <Title>Crie sua conta</Title>
          </ContainerLogo>

          <WrapperInput>
            <Input
              placeholder='Nome'
            />
            <ButtonIcon
              icon='person-add'
            />
          </WrapperInput>
        
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
          <Button title='Criar e acessar'/>
          <WrapperFooter>
            <Button 
              title='Voltar para login'
              type = 'SECONDARY'
            />
          </WrapperFooter>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

