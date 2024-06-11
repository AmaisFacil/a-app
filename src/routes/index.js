import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import InitialPage from '../screens/initialPage';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import Home from '../screens/home';


const routes = [ InitialPage, SignIn, SignUp, Home ]
const Stack = createNativeStackNavigator();

const Router = ({}) => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='InitialPage'>
      {
        routes && routes.map((screen, i) => (
            <Stack.Screen key={i} name={screen.name} component={screen} options={{ headerShown: false }}/>
        ))
      }
    </Stack.Navigator>
  </NavigationContainer>
)

}

export default Router