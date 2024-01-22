import { useTheme } from 'styled-components/native'
import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { COLORS } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = COLORS.WHITE
  return (
    <View style={[{ flex:1, backgroundColor: COLORS.WHITE }]}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}