import React from 'react' 
import { FlatList } from 'react-native';
import { Container } from './styles'

import { Header } from '@Modules/Dog/Components/HomeHeader';
import { BoxDog } from '@Modules/Dog/Components/BoxDog';
import { ListEmpty } from '@Components/ListEmpty';
import { useAuth } from '@Modules/Authentication/Hooks/useAuth';
import { Loading } from '@Components/Loading';
import { useSaveDogsFavorite } from '@Modules/Dog/Hooks/useSaveDogsFavorite';
import { useGetDogs } from '@Modules/Dog/Hooks/useGetDogs';

export function Home() {
	const { user } = useAuth()

	const { fetchDogs, dogs } = useGetDogs()

	const { handleFavoriteDog } = useSaveDogsFavorite()
	
	return (
    <Container>
      <Header
				user={user}
			/>

			<FlatList 
				data={dogs}
				keyExtractor={item => item.id}
				renderItem={({item }) => 
					<BoxDog 
						item={item}
						icon='favorite-outline'
						OnPress={() => handleFavoriteDog(item)}
					/>
				}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					<ListEmpty message='Listagem de items vazia'
				/>}
				onEndReached={fetchDogs}
				onEndReachedThreshold={0.1}
      	ListFooterComponent={() => (<Loading />)}
			/>      
    </Container>
  )
}