import React,{useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { blue, red, white, white1 } from '../../utils/constan.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconLetter, IconLogout, IconNotif } from '../../assets/index.js';

const HeaderApp = ({navigation}) => {


    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View style={[styles.headerApp, { backgroundColor: blue }]}>

                <View style={[styles.areaHead, { flexDirection: "row", justifyContent: "space-between", marginHorizontal: wp('2.5%'), flex: 1 }]} >

                    <Text style={styles.textHead}>Todo</Text>

                    <View style={{ flexDirection: "row"}}>
                        <View>

                            <TouchableOpacity style={styles.iconS} onPress={() => handleGoTo('Surat')}>
                                <View style={{alignItems:"center"}}>

                                <IconLetter />
                                <Text style={styles.txtI}>Surat</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.iconN} onPress={() => handleGoTo('Notifikasi')}>
                                <View style={{alignItems:"center"}}>

                                <IconNotif />
                                <Text style={styles.txtI}>Notifikasi</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.iconL} >
                                <View style={{alignItems:"center"}}>

                                <IconLogout />
                                <Text style={styles.txtI}>Log Out</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
    )
}

export default HeaderApp

const styles = StyleSheet.create({
    headerApp: {
        width: "100%",
        height: hp('10%'),
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
        backgroundColor:red
    },
    textHead: {
        color: white,
        fontSize: 36,
        fontFamily: "Poppins-SemiBold",
    },
    iconS: {
        marginVertical: hp('1.1%'),
        paddingHorizontal:wp('2%')

    },
    iconN: {
        marginVertical: hp('1.1%'),
        paddingHorizontal:wp('2')
 

    },
    iconL: {
        marginVertical: hp('1.1%'),

    },
    txtI:{
        color:white1,
        fontFamily: "Poppins-SemiBold",
    }
})
