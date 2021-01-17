import React, {useState} from 'react';
import SharedPreferences from 'react-native-shared-preferences';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import {blue, grey0, grey1, white} from '../../utils/constan';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Snackbar from 'react-native-snackbar';

const ShowMessage = (msg) => {
  Snackbar.show({
    text:msg,
    duration:Snackbar.LENGTH_LONG
  })
}

const Login = ({navigation}) => {
  const [isKadin, setIsKadin] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const ActionLogin = async () => {
    try {
      let data = await database().ref('/users/');
      data.once('value').then(async (snapshot) => {
        await snapshot.forEach(async (element) => {
          var _element = await element.val();
          if (username == _element.username && password == _element.password) {
            if (_element.jabatan.jabatan === 'Kadin Kominfo') {
              // Store to SharedPreferences
              if (_element.username != null) {
                SharedPreferences.setItem('user_id', _element.id.toString());
                SharedPreferences.setItem('username', _element.username);
                SharedPreferences.setItem('fcm_token',_element.fcm_token)
                navigation.replace('Home');
              }
            }else{
              ShowMessage("Akun Tidak Di Izinkan Login")
            }
          } else {
            ShowMessage("Gagal Login")
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{backgroundColor: grey0}}>
        <Text
          style={[
            styles.txtJudul,
            {fontFamily: 'Poppins-SemiBold', fontSize: hp('4%')},
          ]}>
          Login User
        </Text>
        <View style={[styles.Form, {alignSelf: 'stretch'}]}>
          <View style={styles.inForm}>
            <Text
              style={{
                color: grey1,
                fontFamily: 'Poppins-Regular',
                fontSize: hp('3%'),
              }}>
              Username
            </Text>
            <TextInput
              style={{
                borderColor: blue,
                borderWidth: 2,
                borderRadius: 10,
                fontSize: hp('2.5%'),
              }}
              placeholder="Isikan username"
              onChangeText={(val) => setUsername(val)}></TextInput>
          </View>
          <View style={styles.inForm}>
            <Text
              secureTextEntry={true}
              style={{
                color: grey1,
                fontFamily: 'Poppins-Regular',
                fontSize: hp('3%'),
              }}>
              Password
            </Text>
            <TextInput
              style={{
                borderColor: blue,
                borderWidth: 2,
                borderRadius: 10,
                fontSize: hp('2.5%'),
              }}
              placeholder=" Isikan password"
              onChangeText={(password) => setPassword(password)}></TextInput>
          </View>

          <TouchableOpacity
            style={[styles.input, {backgroundColor: blue}]}
            onPress={ActionLogin}>
            <Text
              style={[
                styles.txtl,
                {fontSize: hp('3%'), fontFamily: 'Poppins-SemiBold'},
              ]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  txtJudul: {
    textAlign: 'center',
    paddingVertical: hp('1.5%'),
    backgroundColor: blue,
    color: white,
  },
  Form: {
    paddingHorizontal: wp('5%'),
    marginVertical: hp('2%'),
  },
  inForm: {
    marginVertical: hp('2.5%'),
    borderRadius: 10,
  },
  input: {
    width: wp('90%'),
    height: hp('6.5%'),
    marginVertical: 20,
    alignSelf: 'center',
  },
  txtl: {
    flex: 1,
    justifyContent: 'space-between',
    color: white,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Login;
