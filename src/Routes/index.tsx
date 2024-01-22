import { useTheme } from 'styled-components/native'
import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();

  const theme = DefaultTheme;

  return (
    <View style={[{ flex:1, backgroundColor: COLORS.WHITE }]}>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}