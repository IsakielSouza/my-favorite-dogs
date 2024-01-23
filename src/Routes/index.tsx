import { useTheme } from 'styled-components/native'
import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '@Modules/Authentication/Hooks/useAuth';

import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();

  const { user } = useAuth()

  console.log("USUÁRIO LOGADO =>", user);

  const theme = DefaultTheme;

  return (
    <View style={[{ flex:1, backgroundColor: COLORS.WHITE }]}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}