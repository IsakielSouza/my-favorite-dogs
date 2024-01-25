import React from 'react' 
import { FlatList } from 'react-native';
import { Container } from './styles'

import { Header } from '@Modules/Dog/Components/HomeHeader';
import { BoxDog } from '@Modules/Dog/Components/BoxDog';
import { ListEmpty } from '@Components/ListEmpty';
import { useAuth } from '@Modules/Authentication/Hooks/useAuth';
import { useFetcherDogs } from '@Modules/Dog/Hooks/useFetcherDogs';
import { DogDTO } from '@Modules/Dog/Dtos/DogDTO';
import { storageFavoriteDogSave } from '@Storage/storageFavoriteDog';
import { Loading } from '@Components/Loading';

export function Home() {
	const { user } = useAuth()

 	const { dogs, fetchDogs, loading } = useFetcherDogs();

	async function handleFavoriteDog(dog: DogDTO) {
		await storageFavoriteDogSave(dog)
	}

	if(loading) {
		return (<Loading />)
	}

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