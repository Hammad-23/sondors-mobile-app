import React, {useState} from 'react';
import { View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export default function CheckBoxx() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View  >
      <CheckBox
        // disabled={false}
        style={{}}
        value={toggleCheckBox}
        tintColor="black"
        onFillColor="black"
        onCheckColor="#FFF"
        tintColors="Black"
        onTintColor="black"
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
}
