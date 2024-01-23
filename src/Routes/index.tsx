import { useTheme } from 'styled-components/native'
import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '@Modules/Authentication/Hooks/useAuth';

import { AppRoutes } from './app.routes';
import { Loading } from '@Components/Loading';

export function Routes() {
  const { COLORS } = useTheme();

  const { user, isLoadingUserStorageData } = useAuth()

  const theme = DefaultTheme;

  if(isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <View style={[{ flex:1, backgroundColor: COLORS.WHITE }]}>
      <NavigationContainer theme={theme}>
        { user.id ? <AppRoutes /> : <AuthRoutes /> }
      </NavigationContainer>
    </View>
  );
}