import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {blue, grey0, grey2, grey3, grey4, red} from '../../utils/constan';
import {IconBack, ImgTodo} from '../../assets';
import RNFetchBlob from 'rn-fetch-blob';
import storage from '@react-native-firebase/storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import database from '@react-native-firebase/database';

const DetailSurat = (props) => {
  const [state, setstate] = useState('');
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Permission',
          message: '',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can write data to external storage');
      } else {
        console.log('Write permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const GetImgUrl = async (url) => {
    const _url = await storage().ref(url).getDownloadURL();
    setstate(_url);
  };
  useEffect(() => {
    GetImgUrl(props.namafile);
    requestCameraPermission();
  }, []);

  const DoDownload = async (filename) => {
    const viewFile = RNFetchBlob.android;
    let dirs = RNFetchBlob.fs.dirs;
    const url = await storage().ref(filename).getDownloadURL();
    const type = await (await storage().ref(filename).getMetadata())
      .contentType;
    // FIXME : membuat detector mimetype menjadi format typeS
    console.log(type.split('.')[1]);
    await RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: dirs.DownloadDir + '/' + filename,
        mime: type,
      },
    })
      .fetch('GET', url)
      .then((res) => {
        viewFile.actionViewIntent(res.path(), type);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DoRemove = (filename, idSurat) => {
    Alert.alert(
      'Remove File Surat',
      'Apakah anda yakin menghapus surat ' + filename,
      [
        {
          text: 'oke',
          onPress: () => {
            storage().ref(filename).delete();
            database()
              .ref('/events/' + idSurat + '/event_detail/surat/')
              .remove();
          },
        },
      ],
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: hp('2.5%'),
          right: wp('4%'),
          justifyContent: 'space-between',
        }}
        onPress={props.backModal}>
        <IconBack title=" " />
      </TouchableOpacity>

      <View style={{alignSelf: 'stretch', marginHorizontal: wp('5%')}}>
        <Text style={styles.title}>Detail Surat</Text>

        <View
          style={[
            styles.Vd,
            {flexDirection: 'column', backgroundColor: grey0},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.txtHead, {color: grey2}]}>
              Jenis: get jenis surat
            </Text>
          </View>
          <Image style={styles.img} source={{uri: state}} />
          <Text style={styles.isi}>Nama: {props.namafile} </Text>
        </View>

        <View style={{marginBottom: hp('5%')}}>
          <TouchableOpacity
            style={[styles.create, {backgroundColor: blue}]}
            onPress={() => DoDownload(props.namafile)}>
            <Text
              style={{
                color: colors.white,
                fontFamily: 'Poppins-SemiBold',
                fontSize: hp('3%'),
              }}>
              Download
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hapus}
            onPress={() => DoRemove(props.namafile, props.idSurat)}>
            <Text
              style={{
                color: colors.white,
                fontFamily: 'Poppins-SemiBold',
                fontSize: hp('3%'),
              }}>
              Hapus
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailSurat;

const styles = StyleSheet.create({
  title: {
    fontSize: hp('4%'),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    alignSelf: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
  },
  Vd: {
    height: hp('55%'),
    borderRadius: 5,
    borderColor: grey3,
    borderWidth: 4,
  },
  create: {
    height: hp('6%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  hapus: {
    backgroundColor: red,
    height: hp('6%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHead: {
    fontSize: hp('2.7%'),
    fontFamily: 'Poppins-SemiBold',
    height: hp('8%'),
  },
  img: {
    borderRadius: 5,
    borderColor: grey3,
    height: hp('40%'),
    width: wp('90%'),
    borderWidth: 4,
    alignSelf: 'center',
    marginVertical: 5,
  },
  isi: {
    fontSize: hp('2.5%'),
    textTransform: 'capitalize',
    color: grey4,
    height: hp('6%'),
  },
});
