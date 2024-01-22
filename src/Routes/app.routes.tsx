import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import Home from '@Modules/Dog/Pages/Home';
import Favorite from '@Modules/Dog/Pages/Favorite';
import Profile from '@Modules/Dog/Pages/Profile';
import Details from '@Modules/Dog/Pages/Details';

type AppRoutes = {
  home: undefined;
  favorite: undefined;
  profile: undefined;
  details: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="favorite"
        component={Favorite}
      />
      <Screen 
        name="profile"
        component={Profile}
      />
      <Screen 
        name="details"
        component={Details}
      />
    </Navigator>
  );
}