import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../../utils/Constants';

import CustomButton from '../../components/button';
import Input from '../../components/input';
import {signIn} from '../../config/firebase';
export default function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const logIn = async () => {
    setShow(true);

    try {
      await signIn(email, password);

      setShow(false);
      alert('Successfully logged in');
      navigation.navigate('home');
    } catch (e) {
      console.log('register error--> ', e.message);
      setShow(false);
      alert('error');
    }
  };
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
          <View style={{marginTop: '30%'}}>
            <View style={style.signUpheading}>
              <Text style={style.signupTxt}>Login</Text>
            </View>
            <View style={style.formSec}>
              <View style={style.inpContainer}>
                <Input
                  onChangeText={val => {
                    setEmail(val);
                  }}
                  placeholder="Email"
                />
              </View>

              <View style={style.inpContainer}>
                <Input
                  onChangeText={val => {
                    setPassword(val);
                  }}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={{padding: 10, color: Colors.primaryColor}}>
                    Don't have an account ?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={style.inpContainer}>
                {show && <ActivityIndicator size="large" color={Colors.primaryColor} />}
                <CustomButton onPress={logIn} title="Login" />
              </View>
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
    flex: 1,
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
    paddingHorizontal: 10,
  },
  signupTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: '._proxima-nova-bold-597278273b8ca',
  },
  inpContainer: {
    marginTop: 20,
  },
  formSec: {
    marginTop: 30,
    justifyContent: 'center',
  },
  logoStyle: {
    width: 153,
    height: 25,
  },
});
