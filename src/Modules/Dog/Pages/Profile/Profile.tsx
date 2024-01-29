import { Container } from './styles';
import { useState } from 'react';

import {
  Alert,
  Keyboard,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import { Avatar, TextProfile, WrapperAvatar } from './styles'
import { WrapperInput } from '@Components/styles'
import { Input } from '@Components/Input';
import { Button } from '@Components/Button';
import * as ImagePicker from 'expo-image-picker';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import avatar from '@Assets/userPhotoDefault.png'
import { AppError } from '@Utils/AppError';

import { useAuth } from '@Modules/Authentication/Hooks/useAuth';
import { TitleAlertForm } from '@Modules/Authentication/Pages/SignUp/styles';
import { api } from '@Modules/Authentication/Services/api';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
}

const profileSchema = yup.object({
  name: yup.string().required('Informe nome.'),
  email: yup.string(),
  old_password: yup.string(),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos.').nullable().transform((value) => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref('password'), null], 'A Confirmação de senha não confere')
    .when('password', {
      is: (Field: any) => Field,
      then: (schema) => schema
        .nullable()
        .required('Informe a confirmação de senha.')
        .transform((value) => (!!value ? value : null))
    })
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');

  const { user, updateUserProfile } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({ 
    defaultValues: { 
      name: user.name,
      email: user.email
    },
    resolver: yupResolver(profileSchema) 
  });


  function defaultPhotoScreen() {
    const uri  =  { uri: userPhoto }

    return userPhoto ? uri : avatar
  }

  async function handleUserPhotoSelected() {

    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      
      if(photoSelected.canceled) {
        return;
      }
  
      if(photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível criar a foto. Tente novamente.';

      Alert.alert( 'Aviso', title)
    } finally {
      
    setPhotoIsLoading(false);
    }
  }


  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);

      const userUpdated = user;
      userUpdated.name = data.name;
      
      await api.put('/users', data);

      await updateUserProfile(userUpdated);

      Alert.alert('Concluídos', 'Perfil atualizado com sucesso!')

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível atualizar os dados. Tente novamente mais tarde.';


      Alert.alert(title, 'Não foi possível atualizar os dados. Tente novamente mais tarde.')
      
    } finally {
      setIsUpdating(false);
    }
  }
 
  return (
    <TouchableNativeFeedback
    onPress={() => Keyboard.dismiss()}
    >
      <ScrollView
          contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        <Container>

        <WrapperAvatar>

          <Avatar source={defaultPhotoScreen()}></Avatar>

          <TouchableOpacity>
            {/* [ ] TODO Adicionar func upload back */}
          {/* <TextProfile 
            onPress={handleUserPhotoSelected}
          >
            Alterar foto
            </TextProfile> */}

          </TouchableOpacity>
        </WrapperAvatar>
          
        <Controller 
          control={control}
          name='name'
          render={({ field: { value, onChange } }) => (
            <WrapperInput style={[{marginTop: 32}]}>
              <Input 
                placeholder='Nome'
                onChangeText={onChange }
                value={value}
              />
          </WrapperInput>
          )}
        />
        {errors.name?.message && <TitleAlertForm>{errors.name?.message}</TitleAlertForm>}

        <Controller
          control={control}
          name='email'
          render={({field: { value, onChange }})=> (
            <WrapperInput>
              <Input
                  placeholder='E-mail'
                  editable={false}
                  onChangeText={onChange}
                  value={value}
                />
          </WrapperInput>
          )}
        />

          <TextProfile>Alterar senha</TextProfile>

          <Controller
            control={control}
            name='old_password'
            render={({field: { onChange }})=> (
              <WrapperInput>
                <Input
                  placeholder='Senha antiga'
                  secureTextEntry
                  onChangeText={onChange}
                />
            </WrapperInput>
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({field: {onChange}})=> (
              <WrapperInput>
                <Input
                  placeholder='Nova senha'
                  secureTextEntry
                  onChangeText={onChange}
                />
              </WrapperInput>
            )}
          />
          {errors.password?.message && <TitleAlertForm>{errors.password?.message}</TitleAlertForm>}

          <Controller
            control={control}
            name='confirm_password'
            render={({field: {onChange}})=> (
              <WrapperInput>
                <Input
                  placeholder='Confirme a nova senha'
                  secureTextEntry
                  onChangeText={onChange}
                />
              </WrapperInput>
            )}
          />
          {errors.confirm_password?.message && <TitleAlertForm>{errors.confirm_password?.message}</TitleAlertForm>}
          
          <Button
            title='Atualizar'
            style={[{marginTop: 32}]}
            onPress={handleSubmit(handleProfileUpdate)}
            disabled={isUpdating}
          />
          
        </Container>
      </ScrollView>

    </TouchableNativeFeedback>
  );
}