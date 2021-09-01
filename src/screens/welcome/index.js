import React from 'react';

import {View, Text, ScrollView, StyleSheet, Image,ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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

        <View style={{marginTop: 20}}>
          {/* <LinearGradient 
            style={style.gradContainer}
            colors={['#EE7474', '#FFFFFF00']}>
            <Image
              style={style.img} 
              source={require('../../../assets/images/cycle3.png')}
            />
          </LinearGradient> */}

          <ImageBackground resizeMode="contain" style={style.grad} source={require('../../../assets/images/grad.png')} >
          <Image
              style={style.img} 
              source={require('../../../assets/images/cycle3.png')}
            />
            </ImageBackground>

        </View>

        <View style={style.btnContainerStart}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            title="Login"
          />
        </View>

        <View style={style.btnContainer}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Signup');
            }}
            title="Sign Up"
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
  gradContainer: {
    borderRadius: 300,
    height: 300,
    opacity:0.3
  },
  grad:{
    height:150,
    width:300
  },
  btnContainerStart:{
    marginTop:150,
    width: '85%',
  }
});
