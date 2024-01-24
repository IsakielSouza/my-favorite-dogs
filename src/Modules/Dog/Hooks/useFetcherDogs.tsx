import { useState, useEffect } from 'react';
import { Alert } from 'react-native'
import { api, headers } from '@Modules/Dog/Services/api'
import { msDogPrefixes } from '@Modules/Dog/Services/prefixes'
import { AppError } from '@Utils/AppError';

type DogProp = {
	id: string;
	url: string
}


export function useFetcherDogs() {
  const [dogs, setDogs] = useState<DogProp[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchDogs() {
    try {

      const response = await api.get(msDogPrefixes.IMAGES_SEARCH, { headers});
      console.log('HOOK', response.data)
      setDogs(response.data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os dados';

      Alert.alert('Alerta', title)
    } finally {
      setLoading(false)
    }
  }
	useEffect(() => {
    fetchDogs();
  },[])

  return { dogs, loading }
}

