import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text,ScrollView } from 'react-native'
import { ButtonIcon } from '../../component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TodoDetail = (props) => {
    const [getHari, setHari] = useState("")
    const [getTanggal, setTanggal] = useState("")
    const [getJam, setJam] = useState("")
    const [getTempat, setTempat] = useState("")
    const [getAcara, setAcara] = useState("")
    const [getKeterangan, setKeterangan] = useState("")
    const [getColor, setColor] = useState("")
    
    useEffect(() => {
        setAcara(props.list.acara)
        setHari(props.list.hari)
        setTanggal(props.list.tanggal)
        setJam(props.list.jam)
        setTempat(props.list.tempat)
        setAcara(props.list.acara)
        setKeterangan(props.list.keterangan)
        setColor(props.list.color)
    }, [])

    const handleToGo = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={[styles.section, styles.header, { borderBottomColor: getColor }]} >

                <View style={{ flexDirection: "row" }}>

                    <Text style={styles.waktu}>{getHari} </Text>
                    <Text style={styles.waktu}>{getTanggal} </Text>
                    <Text style={styles.waktu}>{getJam}</Text>
                </View>
                                                        
            </View>
            <ScrollView>

                <View style={[styles.section, styles.conten]}>
                    <Text style={[styles.tempat, styles.Todocontainer]}>{getTempat}</Text>
                    <Text style={[styles.acara, styles.Todocontainer]}>{getAcara}</Text>
                    <Text style={[styles.keterangan, styles.Todocontainer]}>{getKeterangan}</Text>
                </View>
            </ScrollView>

            <View style={[styles.btnIcon, { flexDirection: "row", alignSelf: "center" }]}>
                <TouchableOpacity style={{ marginHorizontal: wp('5%') }} onPress={() => handleToGo('EditJadwal')}>
                    <ButtonIcon title="Edit" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: wp('2%') }}>
                    <ButtonIcon title="Hapus" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: wp('2%') }} onPress={() => handleToGo('Disposisi') }>
                    <ButtonIcon title="Disposisi" />
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        flex: 1,
        alignSelf: "stretch",
    },
    header: {
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomWidth: 3
    },
    waktu: {
        textTransform: "uppercase",
        fontSize: hp('3%'),
        fontFamily: "Poppins-SemiBold",
        paddingVertical: hp('1%'),
        flexShrink: 1
    },
    conten: {
        paddingVertical: 64,
        paddingHorizontal: 32,
    },
    footer: {
        flex: 1,
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    Todocontainer: {
        paddingVertical: hp('1%'),
        fontSize: hp('3%')
    },
    input: {
        flex: 1,
        height: 55,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8
    },
    addTodo: {
        padding: 16,
        marginTop: hp('4.5%')

    },
    btnIcon: {
        marginBottom: hp('15%')
    }
});
export default TodoDetail

