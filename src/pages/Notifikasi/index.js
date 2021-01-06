import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ButtonIcon, NotifAktif } from '../../component';
import { blue, white,grey1 } from '../../utils/constan.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Notifikasi = () => {


    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.container}>

            <View style={[styles.headerApp, { backgroundColor: blue }]}>

                <View style={[styles.areaHead, { flexDirection: "row", justifyContent: "space-between", marginHorizontal: wp('2.5%'), flex: 1 }]} >

                    <Text style={styles.textHead}>Todo</Text>

                    <View style={{ flexDirection: "row" }}>
                        <View>

                            <TouchableOpacity style={styles.iconS}>

                                <ButtonIcon title=" " onPress={() => handleGoTo('Surat')} />
                            </TouchableOpacity>
                        </View>

                        <View>

                            <TouchableOpacity style={styles.iconN}>


                                <ButtonIcon title="" onPress={() => handleGoTo('Notifikasi')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
            <View style={[styles.areaTitle, { flexDirection: "row" }]}>

                <View style={styles.divider} />

                <Text style={styles.title}>
                    Notif<Text style={{ fontWeight: "300", color: blue }}>ikasi</Text>
                </Text>

                <View style={styles.divider} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>

                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                <NotifAktif />
                
            </ScrollView>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    headerApp: {
        width: "100%",
        height: hp('8%'),
        position: "absolute",
        top: hp('0%'),
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    areaHead: {

        marginVertical: hp('0.8%')
    },
    textHead: {
        color: white,
        fontSize: 36,
        fontFamily: "Poppins-SemiBold",
    },
    iconS: {
        marginVertical: hp('1.1%'),
        paddingHorizontal: wp('3%')

    },
    iconN: {
        marginVertical: hp('1.1%'),

    },
    divider: {
        backgroundColor: colors.lightblue,
        height: 3,
        flex: 1,
        alignSelf: "center"
    },
    areaTitle: {
        justifyContent:"space-between",
        marginTop:hp('12%'),
        marginBottom:hp('3%')
    },
    title: {
        fontSize: 38,
        fontFamily: "Poppins-SemiBold",
        color:grey1,
        paddingHorizontal: wp('5%'),

    },

});

export default Notifikasi

