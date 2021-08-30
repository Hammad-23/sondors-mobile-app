import React from 'react';
import {View, Text, ScrollView,Dimensions, Image, StyleSheet,SafeAreaView,FlatList} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Assembly from '../../../assets/images/assemblyPic.png';
import Administration from '../../../assets/images/administration.png';
import Troubleshooting from '../../../assets/images/trouble.png';
import Tech from '../../../assets/images/tech.png';
import Store from '../../../assets/images/store.png';
import Manual from '../../../assets/images/manual.png';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const WIDTH = Dimensions.get('window').width

export default function OperatingSmartStep({navigation,route}) {
  data=[
    {
      id:1,
      name:'https://www.youtube.com/watch?v=WSJHAsnot54',
    },
    {
      id:1,
      name:'https://www.youtube.com/watch?v=WSJHAsnot54',
    },
    {
      id:1,
      name:'https://www.youtube.com/watch?v=WSJHAsnot54',
    },
   
  ]
  return (
    <SafeAreaView style={{flex:1}} >
      <Header route={route.name} />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>{/* <VideoCards/> */}
        <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              width: WIDTH,
            }}>
            <FlatList data={data}
            keyExtractor={(item,index)=>`${index}`}
            ListFooterComponent={({})=>{
              return<View style={{marginTop:20}} />
            }}
            renderItem={({item,index})=>{
             return(
            <View style={style.videoContainer}>
              <VideoPlayer
                video={require('../../../assets/videos/video2.mp4')}
                autoplay={false}
                defaultMuted={true}
                
                thumbnail={require('../../../assets/images/cycle2.png')}
                resizeMode={'contain'}
                fullScreenOnLongPress={true}
                videoWidth={WIDTH}
                videoHeight={220}
                disableControlsAutoHide={true}
              customStyles={{videoWrapper:{width:WIDTH,},seekBarFullWidth:WIDTH*0.8}}
                style={{width:WIDTH,minWidth:WIDTH,maxWidth:WIDTH}}
              />

              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                  marginTop: 10,
                  fontSize: 18,
                  paddingBottom: 20,
                  textAlign: 'left',
                }}>
                SONDORS how to install bike pedals
              </Text>
            </View>

            )
            }} /> 

            {/* <Video
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
        /> */}

            <View style={{marginTop: 20}} />
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
    backgroundColor: '#FFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    paddingTop: 10,
    width: WIDTH*0.9,
    // height: 300,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,

  }
});