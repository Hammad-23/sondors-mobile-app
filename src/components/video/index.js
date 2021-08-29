import React from 'react';
import Video from 'react-native-video';

export default function VideoCards(props) {
  return (
    <>
      <Video
          // paused={pause}
          source={require('../../../assets/videos/video1.mp4')}
          style={{
            height: 250,
            width:"100%"
            // paddingHorizontal: 50,
          }}
          fullscreenOrientation="landscape"
          posterResizeMode="contain"
          onError={() => alert('Error')}
          onEnd={() => alert('Video Ended')}
          controls={true}
        />

    </>
  );
}
