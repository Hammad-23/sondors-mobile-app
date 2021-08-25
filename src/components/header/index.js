import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export default function Header(props){
    return(
        <View style={{backgroundColor:props.color,height:80, justifyContent:"space-around" ,alignItems:"center",flexDirection:"row"}}>
            <View>
            <Feather name='arrow-left' size={25}/>
            </View>
            <View>
          <Text style={{color:props.textColor,fontWeight:'700',fontSize:18}}>{props.title}</Text>
          </View>
          <View>
              <Text> skip</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({


})