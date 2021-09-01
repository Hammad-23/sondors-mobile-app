import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AccordionView from '../../components/faq'
import Header from '../../components/header';
export default function TroubleShooting({navigation,route}) {
  return(
    <SafeAreaView style={{flex:1}} >
    <Header route={route.name} />
    <View style={{backgroundColor:"#FFFFFF", borderRadius:10, width:"90%", alignSelf:"center"}} >
    <AccordionView />
    <View style={{marginTop:20}} />
    </View>
</SafeAreaView>
  )
}
