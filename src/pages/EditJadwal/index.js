import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView, Alert, Image } from 'react-native'
import { ImgCalendar } from '../../assets'
import colors from '../../utils/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { grey4,blue } from '../../utils/constan';
import database from '@react-native-firebase/database';

const EditJadwal = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"];
    const [getHari, setHari] = useState("")
    const [getTanggal, setTanggal] = useState("")
    const [getJam, setJam] = useState("")
    const [getTempat, setTempat] = useState("")
    const [getAcara, setAcara] = useState("")
    const [getKeterangan, setKeterangan] = useState("")
    const [getColor, setColor] = useState(backgroundColors[0])

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Mengambil nilai jam
        var hours = date.getHours();
        // Mengambil nilai menit
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Time format
        var strTime = hours + ':' + minutes + ' ' + ampm;
        var dateTime =
            date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        // Nama-nama Hari
        const days = [
            'Senin',
            'Selasa',
            'Rabu',
            'Kamis',
            'Jum`at',
            'Sabtu',
            'Minggu',
        ];
        const dayName = days[date.getDay()];
        if (dayName || dateTime || strTime != null) {
            setJam(strTime);
            setTanggal(dateTime);
            setHari(dayName);
        }
        hideDatePicker();
    };

    const CreateTodo = async () => {
        try {
            var datas = {
                user_info: {
                    id: "",
                    email: ""
                },
                event_detail: {
                    hari: getHari,
                    tanggal: getTanggal,
                    jam: getJam,
                    tempat: getTempat,
                    acara: getAcara,
                    keterangan: getKeterangan,
                    color: getColor
                },
                dateCreate: new Date().getTime()
            }
            const eventId = new Date().getTime() + new Date().getDay()
            let DoInsert = await database().ref("/events/" + eventId)
                .update(datas)
                .then(() => {
                    Alert.alert(
                        "Input Jadwal Berhasil",
                        "Anda Berhasil Mengubah Jadwal",
                        [
                            { text: "OK", onPress: () => handleToGo("TodoDetail") }
                        ],
                        { cancelable: false }
                    );
                })
        } catch (error) {
            Alert.alert("Gagal Input Jadwal", [{ text: "OK" }], { cancelable: false })
        }
    }
    const renderColors = () => {
        return backgroundColors.map(color => {
            return (
                <TouchableOpacity key={color} style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => setColor(color)}
                />
            )
        })
    }

    const handleToGo = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <KeyboardAvoidingView style={styles.container} >

            <ScrollView style={{ width: wp('100%') }}>

                <View style={{ alignSelf: "stretch", marginHorizontal: wp('3%') }}>
                    <Text style={styles.title}>Edit Data Jadwal</Text>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>

                        <View style={styles.VCalender}>
                            <TouchableOpacity onPress={() => showDatePicker()}>
                                <Image style={styles.iC} source={ImgCalendar} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Hari</Text>
                            <TextInput style={styles.hari} editable={false} value={getHari} />
                        </View>
                        <View>
                            <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Tanggal</Text>
                            <TextInput style={styles.tanggal} editable={false} value={getTanggal} />
                        </View>
                        <View>
                            <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Jam</Text>
                            <TextInput style={styles.jam} editable={false} value={getJam} />
                        </View>

                    </View>

                    <View>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Tempat</Text>
                        <TextInput style={styles.tempat} onChangeText={text => setTempat(text)} />
                    </View>
                    <View>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Acara</Text>
                        <TextInput style={styles.acara} multiline={true} numberOfLines={4} onChangeText={text => setAcara(text)} />
                    </View>

                    <View>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Keterangan</Text>
                        <TextInput style={styles.keterangan} onChangeText={text => setKeterangan(text)} />
                    </View>



                    <View style={{ flexDirection: "column", marginTop: 12, alignSelf: "center" }}>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", textAlign: "center", color: grey4 }}>Warna</Text>
                        <View style={{ flexDirection: "row", }}>
                            {renderColors()}
                        </View>
                    </View>

                    <TouchableOpacity style={[styles.create, { backgroundColor: getColor }]} onPress={CreateTodo}>
                        <Text style={{ color: colors.white, fontFamily: "Poppins-SemiBold", fontSize: hp('3%') }}>Edit</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1
    },

    title: {
        fontSize: hp('4%'),
        fontFamily: "Poppins-SemiBold",
        color: colors.black,
        alignSelf: "center",
        marginTop: hp('4%'),
        marginBottom: hp('4%')
    },
    VCalender: {
        justifyContent: 'space-between',
        backgroundColor: blue,
        height: hp('6.5%'),
        width: wp('12%'),
        top: hp('5.3%'),
        borderRadius: 5
      },
      iC: {
        height: hp('6.2%'),
        width: wp('11%'),
        alignSelf: "center"
    
      },
    hari: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        marginTop: hp('0.2%'),
        width: wp('23%'),
        fontSize: hp('3%'),
    },
    tanggal: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        marginTop: hp('0.2%'),
        width: wp('28%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    jam: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        marginTop: hp('0.2%'),
        width: wp('25%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    tempat: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        marginTop: hp('0.2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    acara: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        textAlignVertical: "top",
        borderRadius: 6,
        height: hp('20%'),
        marginTop: hp('0.2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    keterangan: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        marginTop: hp('0.2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },

    create: {
        height: hp('6.5%'),
        marginTop: hp('2%'),
        alignItems: "center",
        justifyContent: "center",
    },
    colorSelect: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginHorizontal: wp('0.5%')
    }
})
export default EditJadwal
