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

import CustomButton from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/picker';
import CheckBoxx from '../../components/checkbox';
import {Colors} from '../../../utils/Constants';
import {register} from '../../config/firebase';
export default function SignUp({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [ gender,setGender] = useState("Male")
  const [state,setState] = useState('')
  const [emailError,setEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [ageError,setAgeError] = useState(false)
  const [stateEror,setStateError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
  const signUp = async () => {
    
    try {
      if (email && name && password && age && state ){
        setShow(true);
      await register(email, password)
      setShow(false);
      alert('User registered Successfully');
      navigation.navigate('Login');
    }else{
      if(!name){
        setNameError(true)
      }
      if(!email || email.includes('@')!==true){
        setEmailError(true)
      }
      if(!age || age.includes('.'||','||' ')){
        setAgeError(true)
      }
      if(!state || state==="State"){
        setStateError(true)
      }
      if(!password){
        setPasswordError(true)
        password.length<6?alert('Password must contain at least 6 characters'):null
      }
    } 
    } catch (e) {
      console.log('register error--> ', e.message);
      setShow(false);
      alert('error');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ScrollView contentContainerStyle={style.screenContainer}>
          <View style={style.ContentContainer}>
            <View style={style.logoContainer}>
              <Image
                style={style.logoStyle}
                source={require('../../../assets/images/logo.png')}
              />
            </View>

            <View style={style.signUpheading}>
              <Text style={style.signupTxt}>Signup</Text>
            </View>
            <View style={ style.formSec}>
              <View style={style.inpContainer}>
                <Input
                  onChangeText={val => {
                    setEmail(val);setEmailError(false)
                  }}
                  borderColor={emailError?"red": "#FFF"}
                  placeholder="Email*"
                />
               {emailError&&<Text style={{color:"red", paddingHorizontal:10}} >Please enter a valid email address</Text>}
              </View>

              <View style={style.inpContainer}>
                <Input placeholder="Name*"  onChangeText={val => {
                    setName(val);setNameError(false)
                  }}
                  borderColor={nameError?"red": "#FFF"}
                  />
              {nameError&&<Text style={{color:"red", paddingHorizontal:10}} >Please enter a valid name</Text>}

              </View>
              <View style={style.inpContainer}>
                <Input
                  secureTextEntry={true}
                  onChangeText={val => {
                    setPassword(val);setPasswordError(false)
                  }}
                  borderColor={passwordError?"red": "#FFF"}
                  placeholder="Password"
                />
                {passwordError&&<Text style={{color:"red", paddingHorizontal:10}} >Password must contain at least 6 characters</Text>}
              </View>

              <View style={style.inpContainer}>
                <Input onChangeText={(value)=>{setAge(value);setAgeError(false)}}  borderColor={ageError?"red": "#FFF"}keyboardType="numeric" placeholder="Age*" />
                {ageError&&<Text style={{color:"red", paddingHorizontal:10}} >Age must be a valid whole number</Text>}

              </View>

              <View style={style.inpContainer}>
                {/* <Input placeholder="    Sex" /> */}
                <Select borderColor="#FFF" label1="Male" label2="Female" />
              </View>

              <View style={style.inpContainer}>
                <Select borderColor={stateEror?"red":"#FFF"} onValueChange={(value)=>{setState(value);setStateError(false)}} label1="State*" label2="California" />
                {stateEror&&<Text style={{color:"red", paddingHorizontal:10}} >Please select a state</Text>}
              </View>

              <View style={style.inpContainer}>
                <Input borderColor={"#FFF"} placeholder="Serial Number" />
              </View>

              <View style={style.inpContainer2}>
                <CheckBoxx />
                <Text style={{paddingHorizontal:10, color:"#5f5f5f"}} >Agree to the terms of service</Text>
              </View>
              {/* <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                  <Text style={{padding:10, color:Colors.primaryColor}} >Already have an account ?</Text>
                </TouchableOpacity>
              </View> */}
              <View style={style.inpContainer}>
                {show && <ActivityIndicator size="large" color={Colors.primaryColor} />}
                <CustomButton onPress={signUp} title="Sign Up" />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  ContentContainer: {
    // height: '100%',
    width: '85%',
    marginTop: 20,
  },
  screenContainer: {
    // height: '100%',
    alignItems: 'center',
    flex: 1,
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
    fontFamily: '._proxima-nova-bold-597278273b8ca',
  },
  inpContainer: {
    marginTop: 12,
    borderRadius:15
  },
  inpContainer2: {
    marginTop: 12,
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
