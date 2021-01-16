import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import database from '@react-native-firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import { blue, white, grey0, grey1, green } from '../../utils/constan'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const Register = () => {

  // menggunakan select
  const [getSelect] = useState("Pilih Jabatan")

  const [getNama, setNama] = useState("")
  const [getJabatan, setJabatan] = useState("")
  const [getUsername, setUsername] = useState("")
  const [getPassword, setPassword] = useState("")

  // export default class Login extends React.Component {

  //   state = {
  //     nama: "",
  //     jabatan: "",
  //     username: "",
  //     password: ""

  //   };

  const RegisterApp = () => {

    const uuid = new Date().getTime()

    const data = database().ref('/users/' + uuid)
    data.set({
      id: uuid,
      nama: getNama,
      jabatan: getJabatan,
      username: getUsername,
      password: getPassword,
    }).then(x => {
      console.log("Sukses");
    }).catch(err => {
      console.log(err);
    })
    setNama("")
    setJabatan("")
    setUsername("")
    setUsername("")
  }
  return (
    <ScrollView>

      <KeyboardAvoidingView style={styles.container}>

        <View style={{ backgroundColor: grey0 }}>
          <Text style={[styles.txtJudul, { fontFamily: "Poppins-SemiBold", fontSize: hp('4%') }]}>Register User</Text>
          <View style={[styles.Form, { alignSelf: "stretch" }]}>

            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Nama</Text>
              <TextInput style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder="Isi nama"
                onChangeText={text => setNama(text)}>

              </TextInput>
            </View>
            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Jabatan</Text>

              <DropDownPicker
                items={[
                  // label pilih jabatan
                  { label: 'Pilih Jabatan', value: 'Pilih Jabatan' },
                  // label jabatan
                  { label: 'Kadin Kominfo', value: 'Kadin Kominfo' },
                  { label: 'Sekdin Kominfo', value: 'Sekdin Kominfo' },
                  { label: 'Kabid EGOV', value: 'Kabid EGOV' },
                  { label: 'Kabid PIKP', value: 'Kabid PIKP' },
                  { label: 'Kabid TIK', value: 'Kabid TIK' },
                ]}
                defaultValue={getSelect}
                containerStyle={{ height: hp('6.5%') }}
                labelStyle={{
                  fontSize: hp('2.5%'),
                  textAlign: 'left',
                  color: grey1
                }}
                style={{ backgroundColor: grey0, borderColor: blue, borderWidth: 2 }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: white }}
                activeLabelStyle={{ color: blue }}
                selectedtLabelStyle={{
                  color: '#39739d'
                }}
                onChangeItem={item => setJabatan({
                  jabatan: item.value
                })}
                onChangeText={text => setJabatan(text)}
              />


              {/* <TextInput style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder="Isi jabatan"
                onChangeText={text => this.setState({ jabatan: text })}>

              </TextInput> */}
            </View>
            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Username</Text>
              <TextInput style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder="Isi email"
                onChangeText={text => setUsername(text)}>

              </TextInput>
            </View>
            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Password</Text>
              <TextInput secureTextEntry={true} style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder=" Isi password"
                onChangeText={text => setPassword(text)}>
              </TextInput>
            </View>

            <TouchableOpacity
              style={[styles.input, { backgroundColor: blue }
              ]}
              onPress={RegisterApp}>
              <Text style={[styles.txtl,
              { fontSize: hp('3%'), fontFamily: "Poppins-SemiBold" }
              ]}>Register</Text>
            </TouchableOpacity>
          </View>

        </View>


      </KeyboardAvoidingView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1
  },
  txtJudul: {
    textAlign: "center",
    paddingVertical: hp('1.5%'),
    backgroundColor: blue,
    color: white

  },
  Form: {
    paddingHorizontal: wp('5%'),
    marginVertical: hp('2%')
  },
  inForm: {
    marginVertical: hp('2.5%'),
    borderRadius: 10
  },
  input: {
    width: wp('90%'),
    height: hp('6.5%'),
    marginVertical: 20,
    alignSelf: "center"
  },
  txtl: {
    flex: 1,
    justifyContent: "space-between",
    color: white,
    textAlign: "center",
    marginTop: 5
  },

})
export default Register