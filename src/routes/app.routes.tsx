import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '@Modules/Authentication/Pages/SignIn';
import SignUp from '@Modules/Authentication/Pages/SignUp';

import Home from '@Modules/Dog/Pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name="signIn"
        component={SignIn}
      />
      <Screen 
        name="signUp"
        component={SignUp}
      />
      <Screen 
        name="home"
        component={Home}
      />
    </Navigator>
  );
}