import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet,View,Text} from 'react-native';
import { Item } from 'native-base';
import { Colors } from '../../../utils/Constants';

export default function Select(props) {
  const [selectedItem, setSelectedItem] = useState(props.pickerValue);
  console.log("My Picker Value -->> ",selectedItem);
  return (
    <View style={{backgroundColor:"#FFF", width:"100%",paddingVertical:5, borderRadius:15, borderColor:props.borderColor,borderWidth:1}} >
    
      <Picker style={style.selectStyle}
        selectedValue={props.pickerValue}
        dropdownIconColor={Colors.inputTextColor}
        mode="dialog"
        onValueChange={(value)=>props.onValueChange(value)}
        >
        {props.list?.map ((item)=><Picker.Item  style={{fontSize:14}} label={item.code} value={item.code} />)}
      </Picker>
    </View>
  );
}

const style = StyleSheet.create({
    selectStyle:{
        backgroundColor:'#FFF',
        width:"97%",
        alignSelf:"center",
        color:Colors.inputTextColor,
        borderRadius:15,
        
    }
})
