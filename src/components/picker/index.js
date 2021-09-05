import React, {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {Item} from 'native-base';
import {Colors} from '../../../utils/Constants';
import RNPickerSelect from 'react-native-picker-select';
import IconDown from 'react-native-vector-icons/AntDesign';

export default function Select(props) {
  const togglePicker = useRef(null);
  const [selectedItem, setSelectedItem] = useState(props.pickerValue);
  console.log('My Picker Value -->> ', selectedItem);
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        width: '100%',
        paddingVertical: 5,
        borderRadius: 15,
        borderColor: props.borderColor,
        borderWidth: 1,
      }}>
      {Platform.OS == 'ios' && (
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            borderRadius: 15,
            justifyContent:"space-between"
          }}>
          <View
            style={{
              width: '70%',
              paddingHorizontal: 15,
            }}>
            <RNPickerSelect
              ref={togglePicker}
              items={props.list?.map(item => ({
                label: item.name,
                value: item.code,
              }))}
              style={{color:"red"}}
              onValueChange={value => props.onValueChange(value)}
              useNativeAndroidPickerStyle={true}
              // placeholder={{color:"red"}}
            />
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              // alignItems: 'flex-end'
            }}>
            <IconDown
              name="down"
              onPress={() => {
                togglePicker.current.togglePicker();
              }}
              // color={Colors.borderColor}
            />
          </View>
        </View>
      )}

     {Platform.OS==="android"&& <Picker style={style.selectStyle}
        selectedValue={props.pickerValue}
        dropdownIconColor={Colors.inputTextColor}
        mode="dropdown"
        onValueChange={(value)=>props.onValueChange(value)}
        >
      
        {props.list?.map ((item)=><Picker.Item  style={{fontSize:14,color:Colors.inputTextColor,backgroundColor:"#FFF"}} label={item.name} value={item.code} />)}
      </Picker>}
    </View>
  );
}

const style = StyleSheet.create({
  selectStyle: {
    backgroundColor: '#FFF',
    width: '97%',
    alignSelf: 'center',
    color: Colors.inputTextColor,
    borderRadius: 15,
    fontWeight: 'bold',
  },
});
