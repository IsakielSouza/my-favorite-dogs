import { useNavigation } from '@react-navigation/native';
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from '@Components/Button';
import { Container, Logo, WrapperInput, ContainerLogo, Title, WrapperFooter } from './styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';

import { AuthNavigatorRoutesProps } from '@Routes/auth.routes';

import LogoImg from '@Assets/logo.png';
import { useShowPassword } from '@Modules/Authentication/Hooks/useShowPassword';
import { Controller, useForm } from 'react-hook-form';
import { TitleAlertForm } from '../SignUp/styles';

import { useAuth } from '@Modules/Authentication/Hooks/useAuth';

type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
  const { signIn } = useAuth()
  
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
 
  function handleSignUp() {
    navigate('signUp')
  }

  function handleSignIn({ email, password }: FormData){
    signIn(email, password);
  }

  const { showPassword, handleShowPassword } = useShowPassword();

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

          <Controller 
            control={control}
            name="email"
            rules={{ required: 'Informe o e-mail' }}
            render={({ field: { onChange } }) => (
              <WrapperInput>
                <Input
                  placeholder='E-mail'
                  keyboardType='email-address'
                  onChangeText={onChange}
                  autoCapitalize='none'
                />
                <ButtonIcon
                    icon='email'
                  />
              </WrapperInput>
            )}
          />
        {errors.email?.message && <TitleAlertForm>{errors.email?.message}</TitleAlertForm>}
        
        <Controller 
            control={control}
            name="password"
            rules={{ required: 'Informe a senha' }}
            render={({ field: { onChange } }) => (
              <WrapperInput>
                <Input
                  placeholder='Senha'
                  onChangeText={onChange}
                  secureTextEntry={showPassword}
                  autoCorrect={false}
                />
                <ButtonIcon
                  icon={ showPassword ? 'visibility' : 'visibility-off' }
                  onPress={handleShowPassword}
                />
              </WrapperInput>
            )}
        />
        {errors.password?.message && <TitleAlertForm>{errors.password?.message}</TitleAlertForm>}

        <Button
          title='Acessar'
          onPress={handleSubmit(handleSignIn)}
        />

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

