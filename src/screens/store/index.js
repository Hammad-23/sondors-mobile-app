import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Assembly from '../../../assets/images/assemblyPic.png';
import Administration from '../../../assets/images/administration.png';
import Troubleshooting from '../../../assets/images/trouble.png';
import Tech from '../../../assets/images/tech.png';
import Store from '../../../assets/images/store.png';
import Replace from '../../../assets/images/replace.png';
import Manual from '../../../assets/images/manual.png';
import Tshirt from '../../../assets/images/tshirt.png';
import Bike from '../../../assets/images/bike.png';

export default function SandorsStore() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.contentWrapper}>
          {/* <View style={style.heading}>
            <Text style={style.userNameStyle}>Hello Joanna!</Text>
            <Text style={style.welcomeHeading}>Welcome</Text>
          </View> */}

          <View style={style.firstTwoCards}>
            <Card
              height={56}
              width={56}
              src={Replace}
              title="Replacement Parts"
            />
            <Card
              height={52}
              width={52}
              src={Administration}
              title="Accessories"
            />
          </View>

          <View style={style.firstTwoCards}>
            <Card height={54} width={54} src={Tshirt} title="Apparel" />
            <Card height={78} width={78} src={Bike} title="Place Bike Order" />
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
