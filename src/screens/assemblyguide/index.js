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
import Video from 'react-native-video';

export default function AssemblyGuide({navigation,route}) {
  let videos=[{

  },{

  },{}]
  return (
    <SafeAreaView style={{flex:1}} >
      <Header route={route.name} />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>{/* <VideoCards/> */}
        <View style={{justifyContent:"center", alignItems:"center", flex:1,width:"95%"}} >
          {videos.map((item)=>{
            return(
              <View style={style.videoContainer}>
            
            <Video
          paused={true}
          source={require('../../../assets/videos/video2.mp4')}
          resizeMode="contain"
          style={{
            height: 200,
            width:"100%"
            // paddingHorizontal: 50,
          }}
          fullscreen={true}
          fullscreenAutorotate={true}
          fullscreenOrientation="landscape"
          posterResizeMode="contain"
          onError={() => alert('Error')}
          onEnd={() => alert('Video Ended')}
          controls={true}
          // collapsable={true}
        />
              <Text style={{alignSelf:"flex-start", fontWeight:'bold',paddingHorizontal:10,marginTop:10,fontSize:18,paddingBottom:20,textAlign:"left"}}>SONDORS how to install bike pedals</Text>
              </View>
            )
          })
          }
          <View style={{marginTop:20}} />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  contentWrapper: {
    width: '100%',
    alignItems:"center"
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
    paddingHorizontal:10,
    paddingVertical:20,
    alignItems:'center',
    paddingTop:10,
    width:"95%",
    // height:231,
    borderRadius:15,
    marginTop:30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 3

  }
});
