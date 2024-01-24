import React from 'react'
import { DogImage, DogWrapper, SeparatorItem } from './styles'
import { ButtonIcon } from '@Components/ButtonIcon'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
	item: {
		id: string
		url: string;
	};
	icon: keyof typeof MaterialIcons.glyphMap;
	OnPress: () => void
}

export function BoxDog({ item, icon, OnPress }: Props ) {
  return (
		<DogWrapper>
				<DogImage 
				source={{ uri: item.url }}
			/>
			<ButtonIcon
				style={[{alignSelf: 'flex-end' }]}				 
				icon={icon}
				onPress={OnPress}
			/>
			<SeparatorItem />
		</DogWrapper>
  )
}