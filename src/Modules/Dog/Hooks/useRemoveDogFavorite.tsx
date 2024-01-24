import { storageFavoriteDogRemove } from '@Storage/storageFavoriteDog';

import { DogDTO } from "../Components/Dtos/DogDTO"

type Props = {
  handleRemoverFavorite: (dog: DogDTO) => void
}

export function useRemoveDogFavorite():Props {

  async function handleRemoverFavorite(item: DogDTO) {
    
    await storageFavoriteDogRemove(item)
  }
  
  return { handleRemoverFavorite }
}