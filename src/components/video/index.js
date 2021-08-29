import React from 'react';
import VideoPlayer from 'react-native-video-controls';

export default function VideoCards(props) {
  return (
    <>
      <VideoPlayer style={{width:270}}
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        navigator={props.navigator}
      />
      ;
    </>
  );
}
