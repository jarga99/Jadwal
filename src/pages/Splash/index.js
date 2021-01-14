import React, { useEffect } from 'react'
import SharedPreferences from 'react-native-shared-preferences'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { blue, grey0, grey1, white } from '../../utils/constan';


const Splash = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {

            SharedPreferences.getItem("user_id", (val) => {
                console.log(val);
                if (val != null) {
                    navigation.replace("")
                } else {
                    navigation.replace('');
                }
            })

        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>

            <View style={{ justifyContent: "space-between" }}>
                <View style={[styles.judul, { marginVertical: hp('2%') }]}>
                    <View style={styles.divider} />
                    <Text style={[styles.txt, { textAlign: "center", fontSize: hp('10%'), color: blue }]} >To<Text style={{ color: grey1 }}> Do</Text></Text>
                    <View style={styles.divider} />
                </View>
                <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />

                <Text style={[styles.text, { textAlign: "center", color: grey1, fontSize: hp('3%') }]} >Loading . . .</Text>
            </View>
        </View>
    )
};
export default Splash

const styles = StyleSheet.create({
    container: {
        backgroundColor: grey0,
        flex: 1

    },
    judul: {
        top: hp("35%")
    },
    txt: {
        fontFamily: "Poppins-Bold",
        alignSelf: "center",
        position: "relative"
    },
    loading: {
        top: hp('32%')
    },
    text: {
        top: hp('33%'),
        fontFamily: "Poppins-Light"
    }
});
