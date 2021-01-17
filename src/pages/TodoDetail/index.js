import React from 'react';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import {ButtonIcon} from '../../component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TodoDetail = (props) => {
  // function pindah halaman jika ada komponen lain dan params (menerima value ke screen lain)
  const _useNavigation = useNavigation();
  const {
    hari,
    tanggal,
    jam,
    tempat,
    acara,
    keterangan,
    color,
    id,
  } = props.route.params;
  const handleToGo = (screen) => {
    _useNavigation.navigate(screen,{
      id:hari
    });
  };
  console.log(id);
  const DeleteData = (eventId) => {
    let db = database().ref('/events/' + eventId);
    db.remove().then((res) => {
      Alert.alert(
        'Hapus Data berhasil',
        '',
        [
          {
            text: 'Ok',
            onPress: () => _useNavigation.replace('Home'),
          }
        ],
        {cancelable: false},
      );
    });
  };

  const alertDelete = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Del Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => DeleteData(id)},
      ],
      {cancelable: false},
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.section, styles.header, {borderBottomColor: color}]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.waktu}>{hari} </Text>
          <Text style={styles.waktu}>{tanggal} </Text>
          <Text style={styles.waktu}>{jam}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.section, styles.conten]}>
          <Text style={[styles.tempat, styles.Todocontainer]}>{tempat}</Text>
          <Text style={[styles.acara, styles.Todocontainer]}>{acara}</Text>
          <Text style={[styles.keterangan, styles.Todocontainer]}>
            {keterangan}
          </Text>
        </View>
      </ScrollView>

      <View
        style={[styles.btnIcon, {flexDirection: 'row', alignSelf: 'center'}]}>
        <TouchableOpacity
          style={{marginHorizontal: wp('5%')}}
          onPress={() => handleToGo('EditJadwal')}>
          <ButtonIcon title="Edit" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: wp('2%')}}
          onPress={alertDelete}>
          <ButtonIcon title="Hapus" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: wp('2%')}}
          onPress={() => handleToGo('Disposisi')}>
          <ButtonIcon title="Disposisi" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 3,
  },
  waktu: {
    textTransform: 'uppercase',
    fontSize: hp('3%'),
    fontFamily: 'Poppins-SemiBold',
    paddingVertical: hp('1%'),
    flexShrink: 1,
  },
  conten: {
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Todocontainer: {
    paddingVertical: hp('1%'),
    fontSize: hp('3%'),
  },
  input: {
    flex: 1,
    height: 55,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
  },
  addTodo: {
    padding: 16,
    marginTop: hp('4.5%'),
  },
  btnIcon: {
    marginBottom: hp('15%'),
  },
});
export default TodoDetail;
