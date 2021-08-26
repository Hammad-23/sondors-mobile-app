import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Assembly from '../../../assets/images/assemblyPic.png';
import Administration from '../../../assets/images/administration.png';
import Troubleshooting from '../../../assets/images/trouble.png';
import Tech from '../../../assets/images/tech.png';
import Store from '../../../assets/images/store.png';
import Manual from '../../../assets/images/manual.png';
import VideoCards from '../../components/video';

export default function AssemblyGuide() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>{/* <VideoCards/> */}</View>
      </ScrollView>
    </>
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
});
