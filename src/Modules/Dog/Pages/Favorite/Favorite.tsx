import React from 'react' 
import { FlatList } from 'react-native';
import { Container, Header, Title } from './styles'

import { BoxDog } from '@Modules/Dog/Components/BoxDog';
import { ListEmpty } from '@Components/ListEmpty';

const data = undefined
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
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={<ListEmpty 
					message='Você ainda ainda não favoritou nenhum cachorrinho!'
				/>}
			/>      
    </Container>
  )
}