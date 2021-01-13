import React from 'react';
import { StyleSheet, View , Text, Image} from 'react-native';
import { blue,grey0, white } from '../../utils/constan';
import SliceButton from './SliceButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import { ImgTodo } from '../../assets';


const WelcomeAuth = ({ navigation }) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View >
            <Text style={[styles.judul,{fontFamily:"Poppins-SemiBold", fontSize:hp('5%')}]}>ToDo App</Text>
            <View style={styles.gambar}>

            <Image style={styles.img} source={ImgTodo} />
            </View>

            <SliceButton
                desc="Login,
Jika sudah punya akun"
                title="Login"
                onPress={() => handleGoTo('Login')}
            />
            <SliceButton
                desc="Atau Register,
Jika belum punya akun"
                title="Register"
                onPress={() => handleGoTo('Register')}
            />
        </View>


    )
}
export default WelcomeAuth

const styles = StyleSheet.create({
    container: {
        //styling untuk mengatur page screen
        backgroundColor: grey0,

    },
    judul: {
        backgroundColor:blue,
        paddingVertical:hp('2%'),
        textAlign: "center",
        color: white,

    },
    gambar:{
        marginVertical:hp('3%'),
        alignSelf:"center"
    },
    img:{
        width:wp('60%'),
        height:hp('30%'),
        borderRadius:wp('100%'),
        borderWidth:3,
        borderColor:blue
    }
 
})