import { Platform } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import Icon from '@expo/vector-icons/Feather'

import Home from '@Modules/Dog/Pages/Home';
import Favorite from '@Modules/Dog/Pages/Favorite';
import Profile from '@Modules/Dog/Pages/Profile';

type AppRoutes = {
  home: undefined;
  favorite: undefined;
  profile: undefined;
  details: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){

  const { FONT_SIZE, COLORS } = useTheme();

  const iconSize = FONT_SIZE['MD'];

  return(
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.WHITE,
      tabBarInactiveTintColor: COLORS.PURPLE_DARK,
      tabBarStyle: {
        backgroundColor: COLORS.VIOLET_700,
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 70 : 96,
        paddingBottom: 10, 
        paddingTop: 6 
      }
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color  }) => (
            <Icon name='home' color={color} size={iconSize} />
          )
        }}
      />
      <Screen 
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color  }) => (
            <Icon name={'heart'} color={color} size={iconSize} />
          )
        }}
      />
      <Screen 
        name="profile"
        component={Profile}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}