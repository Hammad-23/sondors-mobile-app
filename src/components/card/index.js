import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';



export default function Card(props){
    return(
        <>
        <TouchableOpacity style={style.card}>

            <Image style={style.CardImg} source={require('../../../assets/images/cycle.jpg')} />
            <Text style={{fontWeight:'bold'}} >{props.title}</Text>




        </TouchableOpacity>




        </>
    )
}

const style = StyleSheet.create({
    CardImg:{
        height:100,
        width:100
    },
    card:{
        backgroundColor:"#FFFF",
        height:170,
        borderRadius:12,
        width:140,
        justifyContent:'center',
        alignItems:'center'
    }
})

