import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text,ActivityIndicator} from 'react-native';
import { Colors } from '../../../utils/Constants';

export default function CustomButton(props) {
  return (
    <TouchableOpacity {...props} style={styles.btn}>
      {props.loading?<ActivityIndicator size="small" color={"#FFF"} />:
      <Text style={styles.txt}>{props.title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical:15
  },
  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold"
  },
});
