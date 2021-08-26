import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CustomButton(props) {
  return (
    <TouchableOpacity {...props} style={styles.btn}>
      <Text style={styles.txt}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#C92323',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
});
