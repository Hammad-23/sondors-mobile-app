import React from 'react';
import {View,Text,ScrollView,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Calendarr from '../../calender';
import Header from '../../components/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';



export default function LiveTechSuppport({navigation,route}){
    return(
        <ScrollView>
            <Header route={route.name} />
            <View style={style.main}>
              <View style={style.contain} >
               <Calendarr/>
              </View>

              <TouchableOpacity style={style.notifications} >
                <View>
                  <Image source={require('../../../assets/images/avatar.png')}  />
                </View>
                <View style={{paddingLeft:20}}>
                  <Text>Jhoan Tom</Text>
                  <Text style={style.category} >One-on-One</Text>
                  <View style={{flexDirection:"row",alignItems:"center"}} >
                  <MaterialIcons name="watch-later" size={15} color='grey' />
                  <Text style={{fontSize:12,marginLeft:5}} >25 Min</Text>
                  </View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Entypo name="location-pin" color='grey' size={15} />
                  <Text style={{fontSize:12,marginLeft:5}}>I'll call you</Text>
                  </View>
                </View>

              </TouchableOpacity>


            </View>


        </ScrollView>
    )
}

const style = StyleSheet.create({
    contain:{
        width:"90%",
        // paddingVertical:50,
        height:322,
        marginTop:30,
        borderRadius:15
    
    },
    main:{
        height:700,
        width:'100%',
        alignItems:'center'
    },
    notifications:{
        width:"90%",
        height:118,
        backgroundColor:'#FFFF',
        marginTop:20,
        borderRadius:15,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10

    },
    category:{
        fontSize:18
    }
})