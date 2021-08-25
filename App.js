/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {Image} from 'react-native'
import BottomTabs from './src/navigations/bottomTab'
import Welcome from './src/screens/welcome'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function App(){
  return(
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen  name="Welcome" component={Welcome} />

  

    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}