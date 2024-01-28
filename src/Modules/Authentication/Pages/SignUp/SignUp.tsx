import { useState } from 'react'
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Logo, ContainerLogo, Title, WrapperFooter, TitleAlertForm } from './styles';
import { Button } from '@Components/Button';
import { WrapperInput } from '@Components/styles';
import { Input } from '@Components/Input';
import { ButtonIcon } from '@Components/ButtonIcon';
import { useForm, Controller } from 'react-hook-form';
import LogoImg from '@Assets/logo.png';
import { useShowPassword } from '@Modules/Authentication/Hooks/useShowPassword';
import { AuthNavigatorRoutesProps } from '@Routes/auth.routes';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '@Modules/Authentication/Services/api';
import { AppError } from '@Utils/AppError';


import { useAuth } from '@Modules/Authentication/Hooks/useAuth';
import { Loading } from '@Components/Loading';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere')
});

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { signIn } = useAuth();

  function handleGoBack() {
    navigation.navigate('signIn');
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true)
      
      await api.post('/users', { name, email, password });
      await signIn(email, password)

    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde';

      Alert.alert( 'Aviso', title)
    } finally {
      setIsLoading(false)
    }
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  
  const { showPassword, handleShowPassword } = useShowPassword();

  if(isLoading) {
    return<Loading />
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
            <Title>Crie sua conta</Title>
          </ContainerLogo>

          <Controller 
            control={control}
            name='name'
            render={({ field: { onChange, value } }) => (
              <WrapperInput>
                <Input
                  placeholder='Nome'
                  onChangeText={onChange}
                  value={value}
                />
                <ButtonIcon
                  icon='person-add'
                />
            </WrapperInput>
            )}
          />
          {errors.name?.message && <TitleAlertForm>{errors.name?.message}</TitleAlertForm>}

          <Controller 
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <WrapperInput>
                <Input
                  placeholder='E-mail'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
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
            name='password'
            render={({ field: { onChange, value } }) => (
              <WrapperInput>
                <Input
                  placeholder='Senha'
                  secureTextEntry={showPassword}
                  autoCorrect={false}
                  onChangeText={onChange}
                  value={value}
                />
                <ButtonIcon
                  icon={ showPassword ? 'visibility' : 'visibility-off' }
                  onPress={handleShowPassword}
                />
              </WrapperInput>
            )}
          />
          {errors.password?.message && <TitleAlertForm>{errors.password?.message}</TitleAlertForm>}
        
          <Controller 
            control={control}
            name='password_confirm'
            render={({ field: { onChange, value } }) => (
              <WrapperInput>
                <Input
                  placeholder='Confirme a Senha'
                  secureTextEntry={showPassword}
                  autoCorrect={false}
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType='send'
                />
                <ButtonIcon
                  icon={ showPassword ? 'visibility' : 'visibility-off' }
                  onPress={handleShowPassword}
                />
              </WrapperInput>
            )}
          />
          {errors.password_confirm?.message && <TitleAlertForm>{errors.password_confirm?.message}</TitleAlertForm>}

          <Button
            title='Criar e acessar'
            onPress={handleSubmit(handleSignUp)}
          />

          <WrapperFooter>
            <Button 
              title='Voltar para login'
              type = 'SECONDARY'
              onPress={handleGoBack}
            />
          </WrapperFooter>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

