import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/header';
import Manual from '../../../assets/images/manual.png';
import RNFetchBlob from 'rn-fetch-blob';
const PDF_URL =
  'https://firebasestorage.googleapis.com/v0/b/sondors.appspot.com/o/SMARTSTEPMANUAL.pdf?alt=media&token=60c3c421-4b8d-4b7f-aa63-86cf5121dd5b';

export default function OwnersManual({navigation, route}) {
  const {config, fs} = RNFetchBlob;
  useEffect(() => {}, []);
  const historyDownload = () => {
    //Function to check the platform
    //If iOS the start downloading
    //If Android then ask for runtime permission
    if (Platform.OS === 'ios') {
      this.downloadHistory();
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'storage title',
            message: 'storage_permission',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //Once user grant the permission start downloading
            console.log('Storage Permission Granted.');
            this.downloadHistory();
          } else {
            //If permission denied then show alert 'Storage Permission
            Alert.alert('storage_permission');
          }
        });
      } catch (err) {
        //To handle permission related issue
        console.log('error', err);
      }
    }
  };
  const downloadPdf = async () => {
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.DownloadDir;
    let date = new Date();
    const filePath =
      PictureDir +
      '/Owners manual' +
      Math.floor(date.getTime() + date.getSeconds() / 2) +
      '.pdf';
    let options = {
      // fileCache: true,
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path: filePath,
        description: 'Risk Report Download',
        mime: 'application/pdf',
      },
    };
    config(options)
      .fetch('GET', PDF_URL)
      .then(res => {
        //Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        // alert('Report Downloaded Successfully.');
        RNFetchBlob.android.actionViewIntent(res.path(), 'application/pdf')

      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header route={route.name} />
      <View style={style.contentContainer}>
        <View style={style.download}>
          <TouchableOpacity style={style.pdfImgContainer} onPress={downloadPdf}>
            <Image style={style.pdfImg} source={Manual} />
          </TouchableOpacity>
        </View>
        <View style={style.txt}>
          <Text style={style.manualtxt}>Download PDF of Owners Manual</Text>
        </View>
      </View>
    </SafeAreaView>
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
