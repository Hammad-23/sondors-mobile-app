import React from 'react';
import {
 TextInput,
 StyleSheet,
 Text,
 View
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function Input(props) {
  return (
   <>

    <TextInput {...props} style={{
      backgroundColor:'#FFFF',
      width:'100%',
      borderRadius:15,
      height:58
    }} />


   </>
  );
}
