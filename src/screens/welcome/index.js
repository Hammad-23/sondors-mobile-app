import React from 'react';

import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import CustomButton from '../../components/button';

export default function Welcome({navigation}) {
  return (
    <>
      <View style={style.container}>
        <View>
          <Image source={require('../../../assets/images/logo.png')} />
        </View>
        <View style={style.txtHolder}>
          <Text style={style.txt}> SMART STEP </Text>
        </View>

        <Image
          style={style.img}
          source={require('../../../assets/images/cycle2.png')}
        />

        <View style={style.btnContainer}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            title="LOGIN"
          />
        </View>

        <View style={style.btnContainer}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Signup');
            }}
            title="SIGN UP"
          />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtHolder: {
    marginTop: 20,
  },
  btnContainer: {
    width: '85%',
    marginTop: 20,
  },
  img: {
    height: 191,
    width: 287,
    borderRadius: 200,
    marginTop: 50,
  },
});
