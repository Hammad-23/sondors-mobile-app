import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home'
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="home">
       <Tab.Screen
        options={{
          
          tabBarIcon: ({color, size}) => (
            <Feather
              name="home"
              color="black"
              size={size}
            />
          ),
        }}
        name="home"
        component={Home}
      />

      


    </Tab.Navigator>
  );
}
