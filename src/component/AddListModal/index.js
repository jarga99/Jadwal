import React, {useEffect, useState} from 'react';
import SharedPreferences from 'react-native-shared-preferences';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';

// Package penggunaan Select item
// import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import colors from '../../utils/Colors';
import {IconBack, ImgCalendar} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {grey4, white1, blue, grey1} from '../../utils/constan';
import messaging from '@react-native-firebase/messaging';
import database from '@react-native-firebase/database';

const AddListModal = (props) => {
  // const [getPicker, setPicker] = useState("")
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  backgroundColors = [
    '#5CD859',
    '#24A6D9',
    '#595BD9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];
  const [user_info, setUserInfo] = useState({user_id: '', username: ''});
  const [getHari, setHari] = useState('');
  const [getTanggal, setTanggal] = useState('');
  const [getJam, setJam] = useState('');
  const [getTempat, setTempat] = useState('');
  const [getAcara, setAcara] = useState('');
  const [getKeterangan, setKeterangan] = useState('');
  const [getColor, setColor] = useState(backgroundColors[0]);
  const [getJSurat, setJSurat] = useState('');
  const [getFileMetaData, setFileMetaData] = useState({
    file_uri: '',
    file_name: '',
  });

  useEffect(() => {
    SharedPreferences.getItems(['user_id', 'username'], (val) => {
      setUserInfo({
        user_id: val[0],
        username: val[1],
      });
    });
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Mengambil nilai jam
    var hours = date.getHours();
    // Mengambil nilai menit
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // Time format
    var strTime = hours + ':' + minutes + ' ' + ampm;
    var dateTime =
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    // Nama-nama Hari
    const days = [
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jum`at',
      'Sabtu',
      'Minggu',
    ];
    const dayName = days[date.getDay()];
    if (dayName || dateTime || strTime != null) {
      setJam(strTime);
      setTanggal(dateTime);
      setHari(dayName);
    }
    hideDatePicker();
  };

  const CreateTodo = async () => {
    try {
      const eventId = new Date().getTime() + new Date().getDay();
      var datas = {
        user_info: {
          id: user_info.user_id,
          email: user_info.username,
        },
        event_detail: {
          id: eventId,
          hari: getHari,
          tanggal: getTanggal,
          jam: getJam,
          tempat: getTempat,
          acara: getAcara,
          keterangan: getKeterangan,
          color: getColor,
          surat: {
            idSurat:eventId,
            jenis_surat: getJSurat,
            file_surat: eventId + '-' + user_info.user_id,
          },
        },
        dateCreate: new Date().getTime(),
      };

      let DoInsert = await database()
        .ref('/events/' + eventId)
        .set(datas)
        .then(() => {
          Alert.alert(
            'Input Jadwal Berhasil',
            'Anda Berhasil Menambhakan Jadwal',
            [{text: 'OK', onPress: () => props.backModal()}],
            {cancelable: false},
          );
          messaging().sendMessage({
            data: {
              title: getAcara,
            },
          });
        });

      const DoUpload = storage()
        .ref(eventId + '-' + user_info.user_id)
        .putFile(getFileMetaData.file_uri);
      DoUpload.on('state_changed', (snapshot) => {
        console.log(snapshot);
      });
    } catch (error) {
      Alert.alert('Gagal Input Jadwal', [{text: 'OK'}], {cancelable: false});
    }
  };

  const FilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (res.uri != null) {
        setFileMetaData({file_uri: res.uri, file_name: res.name});
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
        throw error;
      }
    }
  };

  const renderColors = () => {
    return backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, {backgroundColor: color}]}
          onPress={() => setColor(color)}
        />
      );
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: wp('100%')}}>
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
          <Text style={styles.title}>Input data Jadwal</Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={styles.VCalender}>
              <TouchableOpacity onPress={() => showDatePicker()}>
                <Image style={styles.iC} source={ImgCalendar} />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: hp('3%'),
                  fontFamily: 'Poppins-SemiBold',
                  color: grey4,
                }}>
                Hari
              </Text>
              <TextInput style={styles.hari} editable={false} value={getHari} />
            </View>

            <View>
              <Text
                style={{
                  fontSize: hp('3%'),
                  fontFamily: 'Poppins-SemiBold',
                  color: grey4,
                }}>
                Tanggal
              </Text>
              <TextInput
                style={styles.tanggal}
                editable={false}
                value={getTanggal}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: hp('3%'),
                  fontFamily: 'Poppins-SemiBold',
                  color: grey4,
                }}>
                Jam
              </Text>
              <TextInput style={styles.jam} editable={false} value={getJam} />
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: hp('3%'),
                fontFamily: 'Poppins-SemiBold',
                color: grey4,
              }}>
              Tempat
            </Text>
            <TextInput
              style={styles.tempat}
              onChangeText={(text) => setTempat(text)}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: hp('3%'),
                fontFamily: 'Poppins-SemiBold',
                color: grey4,
              }}>
              Acara
            </Text>
            <TextInput
              style={styles.acara}
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => setAcara(text)}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: hp('3%'),
                fontFamily: 'Poppins-SemiBold',
                color: grey4,
              }}>
              Keterangan
            </Text>
            <TextInput
              style={styles.keterangan}
              onChangeText={(text) => setKeterangan(text)}
            />
          </View>

          {/* area upload Surat */}
          <View style={{alignSelf: 'stretch'}}>
            <View>
              <Text
                style={{
                  fontSize: hp('3%'),
                  fontFamily: 'Poppins-SemiBold',
                  color: grey4,
                }}>
                Jenis Surat
              </Text>
              <TextInput
                style={styles.jeniS}
                onChangeText={(text) => setJSurat(text)}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: hp('3%'),
                  fontFamily: 'Poppins-SemiBold',
                  color: grey4,
                }}>
                Tambah Surat
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.upload}
                  value={getFileMetaData.file_name}
                />
                <TouchableOpacity
                  style={styles.browse}
                  onPress={() => FilePicker()}>
                  <Text
                    style={[
                      styles.txtUp,
                      {fontFamily: 'Poppins-SemiBold', fontSize: hp('3%')},
                    ]}>
                    Browse
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Akhiran upload surat */}

          <View
            style={{
              flexDirection: 'column',
              marginTop: 12,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('3%'),
                fontFamily: 'Poppins-SemiBold',
                textAlign: 'center',
                color: grey4,
              }}>
              Warna
            </Text>
            <View style={{flexDirection: 'row'}}>{renderColors()}</View>
          </View>

          <View style={{marginBottom: hp('5%')}}>
            <TouchableOpacity
              style={[styles.create, {backgroundColor: getColor}]}
              onPress={CreateTodo}>
              <Text
                style={{
                  color: colors.white,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp('3%'),
                }}>
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  },
  VCalender: {
    justifyContent: 'space-between',
    backgroundColor: blue,
    height: hp('6.5%'),
    width: wp('12%'),
    top: hp('5.3%'),
    borderRadius: 5,
  },
  iC: {
    height: hp('6.2%'),
    width: wp('11%'),
    alignSelf: 'center',
  },
  hari: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    width: wp('23%'),
    fontSize: hp('3%'),
    color: grey1,
  },
  tanggal: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    width: wp('30%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
    color: grey1,
  },
  jam: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    width: wp('25%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
    color: grey1,
  },
  tempat: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
  },
  acara: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    textAlignVertical: 'top',
    borderRadius: 6,
    height: hp('20%'),
    marginTop: hp('0.2%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
  },
  keterangan: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
  },
  create: {
    borderRadius: 25,
    height: hp('6%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('30%'),
  },
  colorSelect: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: wp('0.5%'),
  },
  title1: {
    fontSize: hp('4%'),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    alignSelf: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
  },

  jeniS: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    marginTop: hp('0.2%'),
    paddingHorizontal: wp('1%'),
    fontSize: hp('3%'),
  },
  upload: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
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
export default AddListModal;
