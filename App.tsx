import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@Components/Loading';

import theme from './src/theme'

import { Home } from '@Modules/Dog/Pages/Home/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
            />
        { fontsLoaded ? <Home/> : <Loading /> }
      </ThemeProvider>
    </SafeAreaProvider>
    
  );
}
