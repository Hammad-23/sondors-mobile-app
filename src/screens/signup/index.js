import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  CheckBox,
  SafeAreaView
  
} from 'react-native';

import CustomButton from '../../components/button';
import Input from '../../components/input';

export default function SignUp({navigation}) {
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={{flex:1}} >
      <ScrollView contentContainerStyle={style.screenContainer}>
        <View style={style.ContentContainer}>
          <View style={style.logoContainer}>
          <Image style={style.logoStyle} source={require('../../../assets/images/logo.png')} />
          </View>

          <View style={style.signUpheading}>
            <Text style={style.signupTxt}>SIGN UP</Text>
          </View>

          <View style={style.formSec}>
            <View style={style.inpContainer}>
              <Input placeholder="    Email" />
            </View>

            <View style={style.inpContainer}>
              <Input placeholder="    Name" />
            </View>

            <View style={style.inpContainer}>
              <Input keyboardType="numeric" placeholder="    Age" />
            </View>

            <View style={style.inpContainer}>
              <Input placeholder="    Sex" />
            </View>

            <View style={style.inpContainer}>
              <Input placeholder="    State" />
            </View>

            <View style={style.inpContainer}>
              <Input placeholder="    Serial Number" />
            </View>

            {/* <View style={style.inpContainer}>
            <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
        </View> */}

            <View style={style.inpContainer}>
              <CustomButton
                onPress={() => {
                  navigation.navigate('Login');
                }}
                title="SIGN UP"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  ContentContainer: {
    height: '100%',
    width: '85%',
    marginTop: 20,
  },
  screenContainer: {
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 11,
  },
  logoContainer: {},
  signUpheading: {
    marginTop: 30,
  },
  signupTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inpContainer: {
    marginTop: 10,
  },
  formSec: {
    marginTop: 40,
  },
  logoStyle:{
    width:153,
    height:25
  }
});
