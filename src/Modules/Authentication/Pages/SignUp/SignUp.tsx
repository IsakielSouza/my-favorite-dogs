import { useNavigation } from '@react-navigation/native';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button } from '@Components/Button';
import { Container, Logo, WrapperInput, ContainerLogo, Title, WrapperFooter } from './styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';

import LogoImg from '@Assets/logo.png';
import { useShowPassword } from '@Modules/Authentication/Hooks/useShowPassword';

export function SignUp() {
  const { goBack } = useNavigation();
 
  function handleSignIn() {
   goBack()
  }

  const { showPassword, handleShowPassword } = useShowPassword()  

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Container>
          <ContainerLogo>
        <Logo 
          source={LogoImg}
          defaultSource={LogoImg}
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
              secureTextEntry={showPassword}
              autoCorrect={false}
            />
            <ButtonIcon
              icon={ showPassword ? 'visibility' : 'visibility-off' }
              onPress={handleShowPassword}
            />
          </WrapperInput>
          <Button title='Criar e acessar'/>
          <WrapperFooter>
            <Button 
              title='Voltar para login'
              type = 'SECONDARY'
              onPress={handleSignIn}
            />
          </WrapperFooter>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

