import React from 'react';
import { Container, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles'
import { useAuth } from '@Modules/Authentication/Hooks/useAuth';

import defaultUserPhotoImg from '@Assets/userPhotoDefault.png';
import { ButtonIcon } from '@Components/ButtonIcon';

type Props = {
  user: {
    avatar: string
    name: string;
  };
}

export function Header({ user }:Props) {

  const { signOut} = useAuth()

  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Photo
            source={user.avatar  ? { uri: user.avatar } : defaultUserPhotoImg}
          />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>{user.name}</UserName>
          </User>
        </UserInfo>
        <ButtonIcon
          icon='logout'
          type='SECONDARY'
          onPress={signOut}
        />
      </UserWrapper>

        
    </Container>
  )
}