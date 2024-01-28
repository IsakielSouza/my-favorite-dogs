import { Container } from './styles';
import { useState } from 'react';

import {
  Keyboard,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import { Avatar, TextProfile, WrapperAvatar } from './styles'

import { WrapperInput } from '@Components/styles'
import { Input } from '@Components/Input';
import { Button } from '@Components/Button';
import * as ImagePicker from 'expo-image-picker';

import avatar from '@Assets/userPhotoDefault.png'

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  async function handleUserPhotoSelected() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });
    
    console.log(photoSelected)
  }
 
  return (
    <TouchableNativeFeedback
    onPress={() => Keyboard.dismiss()}
    >
      <ScrollView
          contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        <Container>

        <WrapperAvatar>

          <Avatar source={avatar}></Avatar>

          <TouchableOpacity>
          <TextProfile>
            Alterar foto
            </TextProfile>

          </TouchableOpacity>
        </WrapperAvatar>
          
          <WrapperInput style={[{marginTop: 32}]}>

            <Input 
              placeholder='Nome'
            />
          </WrapperInput>
          <WrapperInput>
          <Input
              placeholder='E-mail'
            />
          </WrapperInput>

          <TextProfile>Alterar senha</TextProfile>

          <WrapperInput>
            <Input
              placeholder='Senha antiga'
            />
          </WrapperInput>

          <WrapperInput>
            <Input
              placeholder='Nova senha'
            />
          </WrapperInput>
          <Button
            style={[{marginTop: 32}]}
            title='Atualizar'
            onPress={() => {}}
          ></Button>
          
        </Container>
      </ScrollView>

    </TouchableNativeFeedback>
  );
}