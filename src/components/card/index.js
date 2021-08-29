import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';



export default function Card(props){
    return(
        <>
        <TouchableOpacity {...props} style={style.card}>

            <Image style={{
                height:props.height,
                width:props.width,
            }} source={props.src} />
            <Text style={{fontWeight:'bold',marginTop:20}} >{props.title}</Text>



        </TouchableOpacity>




        </>
    )
}

const style = StyleSheet.create({
    CardImg:{
        // height:52.58,
        // width:63
    },
    card:{
        backgroundColor:"#FFFF",
        // height:170,
        paddingVertical:35,
        paddingHorizontal:15,
        borderRadius:12,
        width:"45%",
        justifyContent:'center',
        alignItems:'center'
    }
})

