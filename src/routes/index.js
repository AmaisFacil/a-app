import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import React from 'react';

import HistoricPreview from '../screens/historicPreview';
import WebprovePreview from '../screens/webprovePreview';
import InitialPage from '../screens/initialPage';
import ProfileEdit from '../screens/profileEdit';
import Webproves from '../screens/webproves';
import Historic from '../screens/historic';
import Profile from '../screens/Profile';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import Home from '../screens/home';


const routes = [ InitialPage, SignIn, SignUp, Home, Profile, ProfileEdit, Historic, HistoricPreview, Webproves, WebprovePreview]
const Stack = createNativeStackNavigator();

const Router = ({}) => {

  const user = useSelector((state) => state.user);
  
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={user?._id ? 'Home' : 'InitialPage'}>
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