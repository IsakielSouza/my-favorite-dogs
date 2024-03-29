import React from 'react' 
import { FlatList } from 'react-native';
import { Container, Title } from './styles';

import { Header } from '@Components/styles';
import { BoxDog } from '@Modules/Dog/Components/BoxDog';
import { ListEmpty } from '@Components/ListEmpty';
import { useRemoveDogFavorite } from '@Modules/Dog/Hooks/useRemoveDogFavorite';
import { useGetDogsFavorite } from '@Modules/Dog/Hooks/useGetDogsFavorite';

export function Favorite() {
	const { dogs } = useGetDogsFavorite();

	const { handleRemoverFavorite } = useRemoveDogFavorite()

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
							OnPress={() => handleRemoverFavorite(item)}
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