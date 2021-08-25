import React, { useState } from 'react';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import {View,StyleSheet} from 'react-native'
export default function PickerInput(){ 
  const [plateCode,setPlateCode]=useState('')
  let numberPlateAndroid=[{

  }]
    return (
        <View>
         <Picker

        style={styles.pickerText}
        mode="dialog"
        selectedValue={plateCode}
        onValueChange={(value) => (setPlateCode(value) && setColorValidation(false) && setColorColor(true))}
      >
        {numberPlateAndroid.map((item) => (
          <Picker.Item label={item} value={item} />
        ))}

        </Picker>
         
        </View>
    );
  
    }

    const styles = StyleSheet.create({
        content: {
          backgroundColor: '#F6F6F6',
        },
        pickerText:{
          borderColor:"grey"
        }

    })


