import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';

import CustomButton from '../../components/button';
import Input from '../../components/input';

export default function LogIn({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={style.screenContainer}>
        <View style={style.ContentContainer}>
          <View style={style.logoContainer}>
          <Image style={style.logoStyle} source={require('../../../assets/images/logo.png')} />
          </View>

          <View style={style.signUpheading}>
            <Text style={style.signupTxt}>LOG IN</Text>
          </View>

          <View style={style.formSec}>
            <View style={style.inpContainer}>
              <Input placeholder="    Email" />
            </View>

            <View style={style.inpContainer}>
              <Input secureTextEntry={true} placeholder="    Password" />
            </View>

            <View style={style.inpContainer}>
              <CustomButton
                onPress={() => {
                  navigation.navigate('home');
                }}
                title="LOG IN"
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
    marginTop: 20,
  },
  formSec: {
    height: '70%',
    justifyContent: 'center',
  },
  logoStyle:{
    width:153,
    height:25
  }
});
