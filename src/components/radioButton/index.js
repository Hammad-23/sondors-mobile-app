import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

export default function RadioButton(props) {
  return (
    <>
      <TouchableOpacity
      {...props}
        style={{
          backgroundColor: props.color,
          width: 105,
          height: 40,
          borderRadius: 30,
          borderColor: '#003C75',
          borderWidth:1,
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center'

        }}>
        <Image source={require('../../../assets/icons/female.png')} />
        <Text style={{color:props.textColor}}>{props.name}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F6F6F6',
  },
 
});
