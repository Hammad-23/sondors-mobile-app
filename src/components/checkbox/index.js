import React, {useState} from 'react';
import { View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export default function CheckBoxx() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{paddingHorizontal:10}}  >
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
}
