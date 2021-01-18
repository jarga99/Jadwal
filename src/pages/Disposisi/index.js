import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  blue,
  green,
  grey1,
  grey0,
  grey4,
  white,
  white1,
} from '../../utils/constan';
import database from '@react-native-firebase/database';
const Disposisi = (props) => {
  // menggunakan select
  const [getJabatan, setJabatan] = useState('');

  const [getNama, setNama] = useState('');

  const DoNotif = async (nama, jabatan) => {
    try {
      const notifId = new Date().getTime() + new Date().getDay();
      let DoInsert = await database()
        .ref('/notif/' + notifId)
        .set({
          nama: nama,
          jabatan: jabatan,
        })
        .then((res) => {
          Alert.alert(
            'Input Disposisi Berhasil',
            'Anda Berhasil Menambhakan Disposisi',
            [{text: 'OK'}],
            {cancelable: false},
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{alignSelf: 'stretch', marginHorizontal: wp('5%')}}>
        <Text style={styles.title}>Yang Menghadiri Acara</Text>
        <View style={styles.inForm}>
          <Text
            style={{
              color: grey1,
              fontFamily: 'Poppins-Regular',
              fontSize: hp('3%'),
            }}>
            Jabatan
          </Text>

          <DropDownPicker
            items={[
              // label pilih jabatan
              {label: 'Pilih Jabatan', value: 'Pilih Jabatan'},
              // label jabatan
              {label: 'Kadin Kominfo', value: 'Kadin Kominfo'},
              {label: 'Sekdin Kominfo', value: 'Sekdin Kominfo'},
              {label: 'Kabid EGOV', value: 'Kabid EGOV'},
              {label: 'Kabid PIKP', value: 'Kabid PIKP'},
              {label: 'Kabid TIK', value: 'Kabid TIK'},
            ]}
            defaultValue={getJabatan}
            containerStyle={{height: hp('7%')}}
            labelStyle={{
              fontSize: hp('2.5%'),
              textAlign: 'left',
              color: grey1,
            }}
            style={{backgroundColor: grey0, borderColor: blue, borderWidth: 2}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: white}}
            activeLabelStyle={{color: blue}}
            selectedtLabelStyle={{
              color: '#39739d',
            }}
            onChangeItem={(text) => setJabatan(text.value)}
            onChangeText={(text) => setJabatan(text)}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: hp('3%'),
              fontFamily: 'Poppins-SemiBold',
              color: grey4,
            }}>
            Nama
          </Text>
          <TextInput style={styles.dN} onChangeText={(text) => setNama(text)} />
        </View>

        <TouchableOpacity style={[styles.create, {backgroundColor: green}]} onPress={() => DoNotif(getNama,getJabatan)}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: hp('3%'),
              color: white1,
            }}>
            Oke
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },

  title: {
    fontSize: hp('4%'),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    alignSelf: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
    textAlign: 'center',
  },

  dN: {
    borderWidth: 2,
    borderColor: blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
  },
  upload: {
    borderWidth: 2,
    borderColor: blue,
    textAlignVertical: 'top',
    borderRadius: 6,
    width: wp('60%'),
    marginTop: hp('0.2%'),
    marginRight: wp('2%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
  },
  browse: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    backgroundColor: blue,
    width: wp('28%'),
  },
  txtUp: {
    textAlign: 'center',
    marginTop: hp('1%'),
    color: white1,
  },

  create: {
    borderRadius: 5,
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('1%'),
  },
  colorSelect: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: wp('0.5%'),
  },
});
export default Disposisi;
