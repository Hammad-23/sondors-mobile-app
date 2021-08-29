import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet,SafeAreaView} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Assembly from '../../../assets/images/assemblyPic.png';
import Administration from '../../../assets/images/administration.png';
import Troubleshooting from '../../../assets/images/trouble.png';
import Tech from '../../../assets/images/tech.png';
import Store from '../../../assets/images/store.png';
import Manual from '../../../assets/images/manual.png';
import VideoCards from '../../components/video';

export default function OperatingSmartStep({navigation,route}) {
  let videos=[{

  },{

  },{

  },{

  }]
  return (
    <SafeAreaView style={{flex:1}} >
      <Header route={route.name} />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>{/* <VideoCards/> */}
        <View style={{justifyContent:"center", alignItems:"center", flex:1}} >
          {videos.map((item)=>{
            return(
              <View style={style.videoContainer}>
            
              <Text> <VideoCards/></Text>
              <Text style={{fontWeight:'bold',marginTop:10}}>SONDORS how to install bike pedals</Text>
              </View>
            )
          })
         

          }
       
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  contentWrapper: {
    width: '85%',
  },
  container: {
    alignItems: 'center',
  },
  welcomeHeading: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 5,
  },
  heading: {
    marginTop: 20,
  },
  firstTwoCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  userNameStyle: {
    color: 'grey',
    fontWeight: 'bold',
  },
  videoContainer:{
    backgroundColor:'#FFFF',
    width:'95%',
    alignItems:'center',
    paddingTop:10,
    height:231,
    borderRadius:15,
    marginTop:30
  }
});