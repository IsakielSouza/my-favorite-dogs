import React from 'react' 
import { Container, DogImage, DogWrapper, Header, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles'
import { ButtonIcon } from '@Components/ButtonIcon';

const user = {
  avatar: 'https://avatars.githubusercontent.com/u/46832485?v=4',
  name: 'Isakiel'
}

const data  = [
	{
		"breeds": [],
		"id": "HytzV6aNm",
		"url": "https://cdn2.thedogapi.com/images/HytzV6aNm.gif",
		"width": 400,
		"height": 225
	},
	{
		"breeds": [],
		"id": "8URVacxGi",
		"url": "https://cdn2.thedogapi.com/images/8URVacxGi.jpg",
		"width": 500,
		"height": 331
	},
	{
		"breeds": [
			{
				"weight": {
					"imperial": "130 - 180",
					"metric": "59 - 82"
				},
				"height": {
					"imperial": "25.5 - 27.5",
					"metric": "65 - 70"
				},
				"id": 212,
				"name": "Saint Bernard",
				"bred_for": "Draft, search, rescue",
				"breed_group": "Working",
				"life_span": "7 - 10 years",
				"temperament": "Friendly, Lively, Gentle, Watchful, Calm",
				"reference_image_id": "_Qf9nfRzL"
			}
		],
		"id": "1d4rlnsPt",
		"url": "https://cdn2.thedogapi.com/images/1d4rlnsPt.jpg",
		"width": 1080,
		"height": 1080
	},
	{
		"breeds": [],
		"id": "TXXuNa4by",
		"url": "https://cdn2.thedogapi.com/images/TXXuNa4by.jpg",
		"width": 2448,
		"height": 3264
	},
	{
		"breeds": [],
		"id": "SGHnWcS9S",
		"url": "https://cdn2.thedogapi.com/images/SGHnWcS9S.jpg",
		"width": 443,
		"height": 332
	}
]

export function Home() {
  return (
    <Container>
      <Header>
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
      </Header>
      
      <DogWrapper>
        <DogImage 
            source={{ uri: 'https://cdn2.thedogapi.com/images/1d4rlnsPt.jpg' }}
          />
         <ButtonIcon
						style={[{alignSelf: 'flex-end' }]}				 
          	icon='favorite-outline'
          	onPress={()=> console.log('FAVORITADO')}
						
          ></ButtonIcon>
      </DogWrapper>
    </Container>
  )
}