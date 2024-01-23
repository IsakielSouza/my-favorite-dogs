import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from 'src/Components/Loading';

import { AuthContext } from '@Modules/Authentication/Contexts/AuthContext';

import theme from './src/theme'

import { Routes } from '@Routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        <AuthContext.Provider value={{
          user: {
              id: '1',
              name: 'Isakiel',
              email: 'isakiele@mail.com',
              avatar: 'isakiel.png'
            }
          }}>
          { fontsLoaded ? <Routes/> : <Loading /> }
        </AuthContext.Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
