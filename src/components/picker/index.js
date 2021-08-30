import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet,View,Text} from 'react-native';

export default function Select(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={{backgroundColor:"#FFF", width:"100%",paddingVertical:5, borderRadius:15}} >
    
      <Picker style={style.selectStyle}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item style={{fontSize:14}} label={props.label1} value={props.label1} />
        <Picker.Item style={{fontSize:14}} label={props.label2} value={props.label2} />
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
