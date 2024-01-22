import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@Components/Loading';

import theme from './src/theme'

import { Routes } from '@Routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
            />
        { fontsLoaded ? <Routes/> : <Loading /> }
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
