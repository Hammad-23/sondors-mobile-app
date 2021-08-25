import React from 'react';
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native';
import Header from '../../components/header'
import Card from '../../components/card'

export default function Home(){
    return(
        <>
        <Header/>
        <ScrollView contentContainerStyle={style.container}>

            <View style={style.contentWrapper}>

            <View style={style.heading}>
                <Text style={style.userNameStyle} >
                    Hello Joanna!
                </Text>
                <Text style={style.welcomeHeading}>Welcome</Text>
            </View>

            <View style={style.firstTwoCards}>
                <Card title="Assembly Guide"/>
                <Card title="Operating Smart Setup" />
            </View>

            <View style={style.firstTwoCards}>
                <Card title="Troubleshooting" />
                <Card title="Live Tech Support" />
            </View>

            <View style={style.firstTwoCards}>
                <Card title="SONDORS store" />
                <Card title="Owners Manual" />
            </View>

            



         </View>




        </ScrollView>





        </>
    )
}

const style = StyleSheet.create({ 
    contentWrapper:{
        width:"85%",
        
    },
    container:{
        alignItems:'center'
    },
    welcomeHeading:{
        fontSize:23,
        fontWeight:'bold',
        marginTop:5
    },
    heading:{
        marginTop:20
    },
    firstTwoCards:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20

    },
    userNameStyle:{
        color:'grey',
        fontWeight:'bold'
    }

})