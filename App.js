/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Image} from 'react-native';
import BottomTabs from './src/navigations/bottomTab';
import Welcome from './src/screens/welcome';
import SignUp from './src/screens/signup';
import LogIn from './src/screens/login';
import Home from './src/screens/home';
import store from './src/redux/store';
import SandorsStore from './src/screens/store';
import AssemblyGuide from './src/screens/assemblyguide';
import TroubleShooting from './src/screens/troubleshooting';
import OwnersManual from './src/screens/ownersManual';
import {Provider} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,} from '@react-navigation/stack';
import DrawerScreens from './src/navigations/DrawerScreens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Store" component={SandorsStore} />
          <Stack.Screen name="assembly" component={AssemblyGuide} />
          <Stack.Screen name="troubleshooting" component={TroubleShooting} />
          <Stack.Screen name="Ownersmanual" component={OwnersManual} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
