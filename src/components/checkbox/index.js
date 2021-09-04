import React, {useState} from 'react';
import { View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export default function CheckBoxx() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View  >
      <CheckBox
        // disabled={false}
        value={toggleCheckBox}
        tintColor="red"
        onFillColor="pink"
        onCheckColor="red"
        tintColors="Black"
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
}
