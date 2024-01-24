import AsyncStorage from "@react-native-async-storage/async-storage";

import { DogDTO } from '@Modules/Dog/Components/Dtos/DogDTO';
import { DOG_FAVORITE } from './storageConfig';

export async function storageFavoriteDogSave(dog: DogDTO) {
  try {
    const storedDogs = await storageFavoriteDogGet();

    const storage = JSON.stringify([...storedDogs, dog])

    await AsyncStorage.setItem(DOG_FAVORITE, storage)

  } catch (error) {
    throw error;
  }
}

export async function storageFavoriteDogGet() {
  try {
    const storage = await AsyncStorage.getItem(DOG_FAVORITE);

    const dogs:DogDTO[] = storage ? JSON.parse(storage) : [];

    return dogs;
  } catch (error) {
    throw error;
  }
}

export async function storageFavoriteDogRemove() {
  await AsyncStorage.removeItem(DOG_FAVORITE);
}