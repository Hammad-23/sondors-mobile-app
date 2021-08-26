import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home';
import Search from '../screens/search';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color="black" size={size} />
          ),
        }}
        name="home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color="black" size={size} />
          ),
        }}
        name="search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color="black" size={size} />
          ),
        }}
        name="save"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="location-outline" color="black" size={size} />
          ),
        }}
        name="location"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-outline" color="black" size={size} />
          ),
        }}
        name="chat"
        component={Search}
      />
    </Tab.Navigator>
  );
}
