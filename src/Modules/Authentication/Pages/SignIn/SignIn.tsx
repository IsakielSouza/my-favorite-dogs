import { useNavigation } from '@react-navigation/native';
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from '@Components/Button';
import { Container, Logo, WrapperInput, ContainerLogo, Title, WrapperFooter } from './styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';

import { AuthNavigatorRoutesProps } from '@Routes/auth.routes';

import LogoImg from '@Assets/logo.png';

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
 
  function handleSignUp() {
    navigate('signUp')
  }

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
          <WrapperFooter>
            <Text style={[{marginBottom: 5, color: 'grey', fontSize: 14}]}>Ainda não tem acesso?</Text>
            <Button 
              title='Criar conta'
              type = 'SECONDARY'
              onPress={handleSignUp}
            />
          </WrapperFooter>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

