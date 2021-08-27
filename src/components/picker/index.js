import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet,View,Text} from 'react-native';

export default function Select() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
    
      <Picker style={style.selectStyle}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item style={{fontSize:14}} label="State" value="State" />
        <Picker.Item style={{fontSize:14}} label="JavaScript" value="js" />
      </Picker>
     
    </>
  );
}

const style = StyleSheet.create({
    selectStyle:{
        backgroundColor:'#FFFF',
        color:'gray',
        borderRadius:15,
        height:58,
        
    }
})
