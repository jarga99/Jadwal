import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import database from '@react-native-firebase/database';
import { blue,white,grey0,grey1 } from '../../utils/constan'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends React.Component {

  state = {
    nama: "",
    jabatan: "",
    username: "",
    password: ""

  };

  LoginApp = () => {
    const { nama, jabatan, username, password } = this.state
    const uuid = new Date().getTime()
    // tempData.push({
    //   username,
    //   password

    // });
    const data = database().ref('/users/' + uuid)
    data.set({
      id: uuid,
      nama: nama,
      jabatan: jabatan,
      username: username,
      password: password,
    }).then(x => {
      console.log("Sukses");
    }).catch(err => {
      console.log(err);
    })
    this.setState({ nama: "", jabatan: "", username: "", password: "" });

  }
  render() {
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
                onChangeText={text => this.setState({ nama: text })}>

              </TextInput>
            </View>
            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Jabatan</Text>
              <TextInput style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder="Isi jabatan"
                onChangeText={text => this.setState({ jabatan: text })}>

              </TextInput>
            </View>
            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Username</Text>
              <TextInput style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder="Isi email"
                onChangeText={text => this.setState({ username: text })}>

              </TextInput>
            </View>
            <View style={styles.inForm}>
              <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Password</Text>
              <TextInput secureTextEntry={true} style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder=" Isi password"
                onChangeText={text => this.setState({ password: text })}>
              </TextInput>
            </View>

            <TouchableOpacity
             style={[styles.input,{backgroundColor: blue}
             ]}
              onPress={this.LoginApp}>
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
  }
})
