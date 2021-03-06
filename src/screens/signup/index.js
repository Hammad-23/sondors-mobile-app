import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import CustomButton from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/picker';
import CheckBoxx from '../../components/checkbox';
import { Colors } from '../../../utils/Constants';
export default function SignUp({navigation}) {
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={style.screenContainer}>
        <View style={style.ContentContainer}>
          <View style={style.logoContainer}>
            <Image
              style={style.logoStyle}
              source={require('../../../assets/images/logo.png')}
            />
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
              {/* <Input placeholder="    Sex" /> */}
              <Select label1="Male" label2="Female" />
            </View>

            <View style={style.inpContainer}>
              <Select label1="State" label2="JavaScript" />
            </View>

            <View style={style.inpContainer}>
              <Input placeholder="    Serial Number" />
            </View>

            <View style={style.inpContainer2}>
              <CheckBoxx />
              <Text>Agree to the terms of service</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                  <Text style={{padding:10, color:Colors.primaryColor}} >Already have an account ?</Text>
                </TouchableOpacity>
              </View>
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
    flex:1
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
  inpContainer2: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formSec: {
    marginTop: 40,
  },
  logoStyle: {
    width: 153,
    height: 25,
  },
});
