import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';
import Manual from '../../../assets/images/manual.png';

export default function OwnersManual() {
  return (
    <>
      <Header title="owners" />

      <View style={style.contentContainer}>
        <View style={style.download}>
          <TouchableOpacity style={style.pdfImgContainer}>
            <Image style={style.pdfImg} source={Manual} />
          </TouchableOpacity>
        </View>
        <View style={style.txt}>
          <Text style={style.manualtxt}>Download PDF of Owners Manual</Text>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  contentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfImg: {
    width: 63.39,
    height: 70,
  },
  pdfImgContainer: {
    backgroundColor: '#FFFF',
    width: 149,
    height: 149,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 111,
  },
  download: {
    width: 179,
    height: 179,
    backgroundColor: '#E9E9E9',
    borderRadius: 129,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    width: 179,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  manualtxt: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
