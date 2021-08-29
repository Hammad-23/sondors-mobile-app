import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet,View,Text} from 'react-native';

export default function Select() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={{backgroundColor:"#FFF", width:"100%",paddingVertical:5, borderRadius:15}} >
    
      <Picker style={style.selectStyle}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item style={{fontSize:14}} label="State" value="State" />
        <Picker.Item style={{fontSize:14}} label="JavaScript" value="js" />
      </Picker>
     
    </View>
  );
}

const style = StyleSheet.create({
    selectStyle:{
        backgroundColor:'#FFF',
        width:"97%",
        alignSelf:"center",
        color:'gray',
        borderRadius:15,
        
    }
})
