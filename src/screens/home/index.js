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

export default function Home({navigation}) {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>
          <View style={style.heading}>
            <Text style={style.userNameStyle}>Hello Joanna!</Text>
            <Text style={style.welcomeHeading}>Welcome</Text>
          </View>

          <View style={style.firstTwoCards}>
            <Card
              onPress={() => {
                navigation.navigate('assembly');
              }}
              height={52.58}
              width={63}
              src={Assembly}
              title="Assembly Guide"
            />
            <Card
              height={52}
              width={52}
              src={Administration}
              title="Operating Smart Setup"
            />
          </View>

          <View style={style.firstTwoCards}>
            <Card
              onPress={() => {
                navigation.navigate('troubleshooting');
              }}
              height={57.02}
              width={65}
              src={Troubleshooting}
              title="Troubleshooting"
            />
            <Card
              height={66}
              width={66.08}
              src={Tech}
              title="Live Tech Support"
            />
          </View>

          <View style={style.firstTwoCards}>
            <Card
              height={62}
              width={62}
              src={Store}
              onPress={() => {
                navigation.navigate('Store');
              }}
              title="SONDORS store"
            />
            <Card
              height={61.84}
              width={56}
              src={Manual}
              title="Owners Manual"
            />
          </View>
        </View>
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