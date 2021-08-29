import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home';
import Search from '../screens/search';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {create} from 'react-test-renderer';

const Stack = createStackNavigator();
export default function BottomTabs() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Feather name="home" color="black" size={size} />
        //   ),
        // }}
        name="home"
        component={Home}
      />

      <Stack.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color="black" size={size} />
          ),
        }}
        name="search"
        component={Search}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color="black" size={size} />
          ),
        }}
        name="save"
        component={Search}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="location-outline" color="black" size={size} />
          ),
        }}
        name="location"
        component={Search}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-outline" color="black" size={size} />
          ),
        }}
        name="chat"
        component={Search}
      />
    </Stack.Navigator>
  );
}


