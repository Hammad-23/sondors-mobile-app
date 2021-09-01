import React,{useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Assembly from '../../../assets/images/assemblyPic.png';
import Administration from '../../../assets/images/administration.png';
import Troubleshooting from '../../../assets/images/trouble.png';
import Tech from '../../../assets/images/tech.png';
import Store from '../../../assets/images/store.png';
import Manual from '../../../assets/images/manual.png';

export default function Home({navigation,route}) {
  useEffect(() => {
   console.log("My Haome -->> ",route.name );
  }, )
  return (
    <SafeAreaView style={{flex:1}} >
      <Header route={route.name} />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>
          <View style={style.heading}>
            <Text style={style.userNameStyle}>Hello Joanna!</Text>
            <Text style={style.welcomeHeading}>Welcome</Text>
          </View>

          <View style={style.firstTwoCards}>
            <Card
              onPress={() => {
                navigation.navigate('Assembly Guide');
              }}
              height={52.58}
              width={63}
              src={Assembly}
              title="Assembly Guide"
            />
            <Card  onPress={() => {
                navigation.navigate('Operating Smart Step');
              }}
              height={52}
              width={52}
              src={Administration}
              title="Operating"
              title2="Smart Step"
            />
          </View>

          <View style={style.firstTwoCards}>
            <Card
              onPress={() => {
                navigation.navigate('Troubleshooting');
              }}
              height={57.02}
              width={65}
              src={Troubleshooting}
              title="Troubleshooting"
            />
            <Card onPress={()=>{navigation.navigate('Live Tech Support')}}
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
                navigation.navigate('Sondors Store');
              }}
              title="SONDORS store"
            />
            <Card onPress={()=>{navigation.navigate('Owners Manual')}}
              height={61.84}
              width={56}
              src={Manual}
              title="Owners"
              title2="Manual"
            />
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
});
