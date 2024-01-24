import React, { useCallback, useState } from 'react' 
import { FlatList } from 'react-native';
import { Container, Header, Title } from './styles'

import { BoxDog } from '@Modules/Dog/Components/BoxDog';
import { ListEmpty } from '@Components/ListEmpty';
import { DogDTO } from '@Modules/Dog/Components/Dtos/DogDTO';
import { storageAuthTokenGet } from '@Storage/storageAuthToken';
import { useFocusEffect } from '@react-navigation/native';
import { storageFavoriteDogGet } from '@Storage/storageFavoriteDog';

export function Favorite() {
	const [dogs, setDogs] = useState<DogDTO[]>([])
	async function fetchDogs() {
		const listDogs = await storageFavoriteDogGet()
		setDogs(listDogs)
	}

	useFocusEffect(useCallback(() => {
    fetchDogs()
  },[]))

  return (
    <Container>
			<Header>
      	<Title>Lista Favorita</Title>
			</Header>

			<FlatList 
				data={dogs}
				keyExtractor={item => item.id}
				renderItem={({item }) => 
					<BoxDog 
							item={item}
							icon='heart-broken'
							OnPress={() => console.log("Dislike the Dog:", item.id)}
					/>
				}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={<ListEmpty 
					message='Você ainda ainda não favoritou nenhum cachorrinho!'
				/>}
			/>      
    </Container>
  )
}