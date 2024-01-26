import { storageFavoriteDogSave } from "@Storage/storageFavoriteDog"
import { DogDTO } from "../Dtos/DogDTO"

export function useSaveDogsFavorite() {
  
  async function handleFavoriteDog(dog: DogDTO) {
    await storageFavoriteDogSave(dog)
  }

  return { handleFavoriteDog }
}