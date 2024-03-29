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
import { Controller, Resolver, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import avatarDefault from '@Assets/userPhotoDefault.png'
import { AppError } from '@Utils/AppError';

import { useAuth } from '@Modules/Authentication/Hooks/useAuth';
import { TitleAlertForm } from '@Modules/Authentication/Pages/SignUp/styles';
import { api } from '@Modules/Authentication/Services/api';
import { Loading } from '@Components/Loading';

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

  const { user, updateUserProfile } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({ 
    defaultValues: { 
      name: user.name,
      email: user.email
    },
    resolver: yupResolver(profileSchema) as unknown as Resolver<FormDataProps>
  });


  function defaultAvatarScreen() {
    const uri  =  { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }

    return user.avatar ? uri : avatarDefault
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
        const fileExtension = photoSelected.assets[0].uri.split('.').pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`
        } as any

        const userPhotoUploadForm = new FormData();

        userPhotoUploadForm.append('avatar', photoFile);

        const userUpdatedResponse = await api.patch('/users/avatar', userPhotoUploadForm, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const userUpdated = user;

        userUpdated.avatar = userUpdatedResponse.data.avatar;

        await updateUserProfile(userUpdated);

        Alert.alert('Sucesso!', 'Foto atualizada!')

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
      
      await api.put('/users', data);

      await updateUserProfile({ ...user, name: data.name });

      Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!')

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível atualizar os dados. Tente novamente mais tarde.';


      Alert.alert(title, 'Não foi possível atualizar os dados. Tente novamente mais tarde.')
      
    } finally {
      setIsUpdating(false);
    }
  }

  if(photoIsLoading || isUpdating) {
    return (<Loading />)
  }
 
  return (
    <TouchableNativeFeedback
    onPress={() => Keyboard.dismiss()}
    >
      <ScrollView
          contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        <Container>

        <WrapperAvatar>

          <Avatar source={defaultAvatarScreen()}></Avatar>

          <TouchableOpacity>
            
          <TextProfile 
            onPress={handleUserPhotoSelected}
          >
            Alterar foto
            </TextProfile>

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