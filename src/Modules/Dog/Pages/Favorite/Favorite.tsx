import React from 'react' 
import { FlatList } from 'react-native';
import { Container, Header, Title } from './styles'

import { BoxDog } from '@Modules/Dog/Components/BoxDog';

const data = [
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
	}
]
export function Favorite() {
  return (
    <Container>
			<Header>
      	<Title>Lista Favorita</Title>
			</Header>

			<FlatList 
				data={data}
				keyExtractor={item => item.id}
				renderItem={({item }) => 
					<BoxDog 
							item={item}
							icon='heart-broken'
							OnPress={() => console.log("Dislike the Dog:", item.id)}
					/>
				}
			/>      
    </Container>
  )
}