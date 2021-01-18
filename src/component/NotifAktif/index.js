import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { grey2,grey3, grey4, red } from '../../utils/constan.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NotifAktif = (props) => {
    return (
        <View style={{marginBottom:10}}>
            <TouchableOpacity style={[styles.NotiF, { backgroundColor: grey3 }]} >
                <View style={{ flexDirection: "column" }} >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={[styles.txtHead,{width:wp('65%'),color:grey2} ]} >Nama :{props.list.nama}</Text>
                        <Text style={[styles.txtHead, {width:wp('28%'),color:red, textAlign:"right" }]} > {props.list.jabatan}</Text>
                    </View>
                    <Text style={styles.isi}>{props.list.tempat}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NotifAktif

const styles = StyleSheet.create({
    NotiF: {
        width: wp('95%'),
        height: hp('10%'),
        paddingHorizontal: wp('1%'),
        paddingVertical: wp('1%'),
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    txtHead: {
        fontSize: hp('2.7%'),
        fontFamily:"Poppins-SemiBold",
    },
    isi:{
        fontSize:hp('2.5%'),
        textTransform:"capitalize",
        color:grey4
    }

})
