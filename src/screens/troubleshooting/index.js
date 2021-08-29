import React from 'react';
import {View, Text} from 'react-native';
import AccordionView from '../../components/faq'
import Header from '../../components/header';
export default function TroubleShooting({navigation,route}) {
  return(
    <>
    <Header route={route.name} />

    <AccordionView/>



  
     


    </>
  )
}
