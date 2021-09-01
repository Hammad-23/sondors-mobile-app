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
      title:'SONDORS Smart Step: Powering On + Off'
    },
    {
      id:1,
      name:'https://www.youtube.com/watch?v=WSJHAsnot54',
      title:'SONDORS Smart Step: Charging'
    },
    {
      id:1,
      name:'https://www.youtube.com/watch?v=WSJHAsnot54',
      title:'SONDORS Smart Step: Folding Instructions'
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
                video={{uri:'https://vod-progressive.akamaized.net/exp=1630501667~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2393%2F23%2F586969097%2F2769919064.mp4~hmac=be8d03c8c9081c56102f939de7b729518328d46d9c728ad490d165731acb21ee/vimeo-prod-skyfire-std-us/01/2393/23/586969097/2769919064.mp4?filename=SONDORS+Unboxing+%7C+With+Storm+Sondors.mp4'}}
                autoplay={false}
                defaultMuted={true}
                disableFullscreen={false}
                
                thumbnail={require('../../../assets/images/thumbnail.png')}
                resizeMode={'contain'}
                fullScreenOnLongPress={true}
                videoWidth={WIDTH}
                videoHeight={200}
                disableControlsAutoHide={true}
                customStyles={{videoWrapper:{width:300,},seekBarFullWidth:WIDTH*0.8}}
                style={{width:300,minWidth:300,maxWidth:300}}
              />

              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                  marginTop: 10,
                  fontSize: 14.98,
                  paddingBottom: 20,
                  textAlign: 'left',
                }}>
                {item.title}
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