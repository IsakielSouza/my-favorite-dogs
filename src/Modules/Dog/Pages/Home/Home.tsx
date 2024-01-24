import React from 'react' 
import { FlatList } from 'react-native';
import { Container } from './styles'

import { Header } from '@Modules/Dog/Components/HomeHeader';
import { BoxDog } from '@Modules/Dog/Components/BoxDog';
import { ListEmpty } from '@Components/ListEmpty';
import { useAuth } from '@Modules/Authentication/Hooks/useAuth';


const data = [
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

	const { user } = useAuth()

	return (
    <Container>
      <Header
				user={user}
			/>

			<FlatList 
				data={data}
				keyExtractor={item => item.id}
				renderItem={({item }) => 
					<BoxDog 
						item={item}
						icon='favorite-outline'
						OnPress={() => console.log("Like the Dog:", item.id)}
					/>
				}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					<ListEmpty message='Listagem de items vazia'
				/>}
			/>      
    </Container>
  )
}