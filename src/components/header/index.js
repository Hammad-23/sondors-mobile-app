import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export default function Header(props){
    return(
     <>
     <View style={style.headerContainer}>

         <View>

             <AntDesign name="menuunfold" size={20} color="black" />

         </View>

         <View>
         <Image style={style.logoStyle} source={require('../../../assets/images/logo.png')} />
         </View>

         <View style={style.rightSideIcons}>
            <Feather name="shopping-bag" size={20} />
           <Ionicons name="notifications-outline" size={20} />
         </View>





     </View>




     </>
    )
}

const style = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center',
        height:"10%"

    },
    
    txt:{
        fontSize:8
    },
    logo:{
        fontSize:20
    },
    rightSideIcons:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:50
        
    },
    logoStyle:{
        width:153,
        height:25
      }

})