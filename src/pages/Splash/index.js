import React, { useEffect } from 'react'
import SharedPreferences from 'react-native-shared-preferences'
import { ActivityIndicator,StyleSheet, View, Text, Image } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { ImgSplash } from '../../assets';
import { blue, grey0, grey1, white } from '../../utils/constan';
import { color } from 'react-native-reanimated';

const Splash = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {

            SharedPreferences.getItem("user_id", (val) => {
                console.log(val);
                if (val != null) {
                    navigation.replace("Home")
                } else {
                    navigation.replace('WelcomeAuth');
                }
            })

        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>

            <View style={{ justifyContent: "space-between" }}>
                <View style={{marginVertical:hp('3%')}}>

                    <Text style={[styles.txt, { textAlign: "center", fontSize: hp('10%'), color: blue }]} >To<Text style={{ color: grey1 }}>do</Text></Text>
                    <Image style={styles.img} source={ImgSplash} />
                </View>
                    <ActivityIndicator size="large" color="#0000ff"/>

                <Text style={[styles.txt, { textAlign: "center", color: grey1, fontSize:hp('3%') }]} >Loading</Text>
            </View>
        </View>
    )
};
export default Splash

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: grey0,
        flex: 1
    },
    img: {
        width: wp('40%'),
        height: hp('20%'),
        borderRadius: wp('100%'),
        borderWidth: 4,
        borderColor: blue
    },
    txt: {
        fontFamily: "Poppins-Bold",
    }
});
