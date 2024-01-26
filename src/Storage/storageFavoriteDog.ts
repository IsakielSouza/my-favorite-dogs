import AsyncStorage from "@react-native-async-storage/async-storage";

import { DogDTO } from '@Modules/Dog/Dtos/DogDTO';
import { DOG_FAVORITE } from './storageConfig';

export async function storageFavoriteDogSave(newDog: DogDTO) {
  try {
    const storedDogs = await storageFavoriteDogGet();

    const existingNewDog = storedDogs.find(dog => dog.id === newDog.id);
    
    if(!existingNewDog) {
      storedDogs.push(newDog)
    }
    
    await AsyncStorage.setItem(DOG_FAVORITE, JSON.stringify(storedDogs))

  } catch (error) {
    throw error;
  }
}

export async function storageFavoriteDogGet() {
  try {
    const storedDogs = await AsyncStorage.getItem(DOG_FAVORITE);

    const dogs:DogDTO[] = storedDogs ? JSON.parse(storedDogs) : [];

    return dogs;
  } catch (error) {
    throw error;
  }
}

export async function storageFavoriteDogRemove(item:DogDTO) {
  try {
    const storedDogs = await storageFavoriteDogGet();
    const dogs = storedDogs.filter(dog => dog.id !== item.id)
    
    await AsyncStorage.setItem(DOG_FAVORITE, JSON.stringify(dogs))
  } catch (error) {
    throw error;
  }

}