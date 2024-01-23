import React from 'react';
import { Container, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles'

type Props = {
  user: {
    avatar: string
    name: string;
  };
}

export function Header({ user }:Props) {
  return (
    <Container>
        <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: user.avatar,
                  }}
                />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>
        </UserWrapper>
      </Container>
  )
}