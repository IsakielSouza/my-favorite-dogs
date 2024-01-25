import { useState, useCallback } from 'react';
import { Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { AppError } from '@Utils/AppError';
import { DogDTO } from '../Dtos/DogDTO';
import { storageFavoriteDogGet } from '@Storage/storageFavoriteDog';

export function useFetcherDogsFavorite() {
  const [dogs, setDogs] = useState<DogDTO[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchDogsFavorite() {
    try {
	  
    const listDogs = await storageFavoriteDogGet()
    setDogs(listDogs)
	} catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os dados';

      Alert.alert('Alerta', title)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchDogsFavorite()
  },[dogs]))

  return { dogs, loading }
}

