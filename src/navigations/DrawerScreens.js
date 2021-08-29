import React from 'react';
import {View,Text} from 'react-native'
import Home from '../screens/home';
import SandorsStore from '../screens/store';
import AssemblyGuide from '../screens/assemblyguide';
import TroubleShooting from '../screens/troubleshooting';
import OwnersManual from '../screens/ownersManual';
import {Provider} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function DrawerScreens({navigation}) {
    return (
    <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="Store" component={SandorsStore} />
        <Drawer.Screen name="assembly" component={AssemblyGuide} />
        <Drawer.Screen name="troubleshooting" component={TroubleShooting}/>
        <Drawer.Screen name="Ownersmanual" component={OwnersManual} />
    </Drawer.Navigator>
      )
  }
  