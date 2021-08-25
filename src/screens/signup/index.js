import React from 'react';

import {View,Text,ScrollView,StyleSheet,Image,TextInput,} from 'react-native';

import CustomButton from '../../components/button'
import Input from '../../components/input'


export default function SignUp({navigation}){
    return(
        <>
        <ScrollView contentContainerStyle={style.screenContainer}>

        <View style={style.ContentContainer}>

           <View style={style.logoContainer}>
               <Text style={style.logo}>SONDORS</Text>
               <Text style={style.txt}>PREMIUM ELECTRIC BIKES</Text>
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
               <Input placeholder="    Name" />
             
           </View>

           <View style={style.inpContainer}>
               <Input placeholder="    Name" />
             
           </View>

           <View style={style.inpContainer}>
               <Input placeholder="    Name" />
             
           </View>

           <View style={style.inpContainer}>
               <CustomButton onPress={()=>{navigation.navigate('Login')}} title="SIGN UP" />
             
           </View>


        </View>

             








        </View>


       </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    ContentContainer:{
        height:'100%',
        width:'85%',
        marginTop:20
       
    },
    screenContainer:{
      height:'100%',
      alignItems:'center'
    },
    logo:{
        fontSize:30,
        fontWeight:'bold'
    },
    txt:{
        fontSize:11
    },
    logoContainer:{
        
    },
    signUpheading:{
        marginTop:30
    },
    signupTxt:{
        fontSize:25,
        fontWeight:'bold'
    },
    inpContainer:{
        marginTop:10
    },
    formSec:{
        marginTop:40
    }
   
})