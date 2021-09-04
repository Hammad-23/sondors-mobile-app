import React from 'react';
import {
 TextInput,
 StyleSheet,
 Text,
 View
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from '../../../utils/Constants';
export default function Input(props) {
  return (
   <>

    <TextInput {...props} style={{
      backgroundColor:'#FFFF',
      width:'100%',
      borderRadius:15,
      borderColor:props.borderColor,
      borderWidth:1,
      paddingHorizontal:20,
      paddingVertical:18
    }} 
    placeholderTextColor={Colors.inputTextColor}
    />
   </>
  );
}
