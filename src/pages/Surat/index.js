import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Modal } from 'react-native';
import {UploadSurat, ButtonIcon, Notifsurat } from '../../component';
import { blue, white, grey1 } from '../../utils/constan.js';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Surat = () => {

    const [modalVisible, setModalVisible] = useState(false);


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

            <Modal
                animationType="slide"
                visible={modalVisible} >
                <UploadSurat backModal ={() => {
                    setModalVisible(false)
                }}/>
            </Modal>

            <View style={[styles.areaTitle, { flexDirection: "row" }]}>

                <View style={styles.divider} />

                <Text style={styles.title}>
                    Surat <Text style={{ fontWeight: "300", color: blue }}>Masuk</Text>
                </Text>

                <View style={styles.divider} />


            </View>


            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                <Notifsurat/>

                <Notifsurat/>

                <Notifsurat/>

                <Notifsurat/>

                <Notifsurat/>

                <Notifsurat/>


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
        justifyContent: "space-between",
        marginTop: hp('12%'),
        marginBottom: hp('3%')
    },
    title: {
        fontSize: 38,
        fontFamily: "Poppins-SemiBold",
        color: grey1,
        paddingHorizontal: wp('5%'),

    },

});

export default Surat

