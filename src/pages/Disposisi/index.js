import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { blue, green, grey4, white1 } from '../../utils/constan';
import database from '@react-native-firebase/database';


const UploadSurat = (props) => {

    // menggunakan select
    const [getSelect] = useState("Pilih Jabatan")

    const [getJSurat, setJSurat] = useState("")
    const [getTSurat, setTSurat] = useState("")



    // const CreateTodo = async () => {
    //     try {
    //         var datas = {
    //             user_info:{
    //                 id:"",
    //                 email:""
    //             },
    //             event_detail:{

    //                 tempat:getTempat,
    //                 acara:getAcara,

    //             },
    //             dateCreate:new Date().getTime()
    //         }  
    //         const eventId = new Date().getTime() + new Date().getDay()
    //         let DoInsert = await database().ref("/events/"+eventId)
    //         .set(datas)
    //         .then(() => {
    //             Alert.alert(
    //                 "Upload Surat Berhasil",
    //                 "Anda Berhasil Menambahkan Surat",
    //                 [
    //                   { text: "OK", onPress: () =>  props.backModal() }
    //                 ],
    //                 { cancelable: false }
    //               );
    //         })
    //     } catch (error) {
    //         Alert.alert("Gagal Upload Surat",[{text:"OK"}],{ cancelable: false })
    //     }
    // }

    return (
        <KeyboardAvoidingView style={styles.container} >

            <View style={{ alignSelf: "stretch", marginHorizontal: wp('5%') }}>
                <Text style={styles.title}>Yang Menghadiri Acara</Text>
                <View style={styles.inForm}>
                    <Text style={{ color: grey1, fontFamily: "Poppins-Regular", fontSize: hp('3%') }}>Jabatan</Text>

                    <DropDownPicker
                        items={[
                            // label pilih jabatan
                            { label: 'Pilih Jabatan', value: 'Pilih Jabatan' },
                            // label jabatan
                            { label: 'Kadin Kominfo', value: 'Kadin Kominfo' },
                            { label: 'Sekdin Kominfo', value: 'Sekdin Kominfo' },
                            { label: 'Kabid EGOV', value: 'Kabid EGOV' },
                            { label: 'Kabid PIKP', value: 'Kabid PIKP' },
                            { label: 'Kabid TIK', value: 'Kabid TIK' },
                        ]}
                        defaultValue={getSelect}
                        containerStyle={{ height: hp('6.5%') }}
                        labelStyle={{
                            fontSize: hp('2.5%'),
                            textAlign: 'left',
                            color: grey1
                        }}
                        style={{ backgroundColor: grey0, borderColor: blue, borderWidth: 2 }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: white }}
                        activeLabelStyle={{ color: blue }}
                        selectedtLabelStyle={{
                            color: '#39739d'
                        }}
                        onChangeItem={item => setJabatan({
                            jabatan: item.value
                        })}
                        onChangeText={text => setJabatan(text)}
                    />


                    {/* <TextInput style={{ borderColor: blue, borderWidth: 2, borderRadius: 10, fontSize: hp('2.5%') }}
                placeholder="Isi jabatan"
                onChangeText={text => this.setState({ jabatan: text })}>

              </TextInput> */}
                </View>

                <View>
                    <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Nama</Text>
                    <TextInput style={styles.jeniS} onChangeText={text => setJSurat(text)} />
                </View>

                <TouchableOpacity style={[styles.create, { backgroundColor: green }]} >
                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: hp('3%'), color: white1 }}>Oke</Text>
                </TouchableOpacity>
            </View>

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
        marginBottom: hp('4%'),
        textAlign: "center"
    },

    jeniS: {
        borderWidth: 2,
        borderColor: blue,
        borderRadius: 6,
        marginTop: hp('0.2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    upload: {
        borderWidth: 2,
        borderColor: blue,
        textAlignVertical: "top",
        borderRadius: 6,
        width: wp('60%'),
        marginTop: hp('0.2%'),
        marginRight: wp('2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    browse: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        backgroundColor: blue,
        width: wp('28%'),
    },
    txtUp: {
        textAlign: "center",
        marginTop: hp('1%'),
        color: white1
    },

    create: {
        borderRadius: 5,
        marginTop: hp('2%'),
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hp('1%'),

    },
    colorSelect: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginHorizontal: wp('0.5%')
    }
})
export default UploadSurat

// export default class AddListModal extends React.Component {
//     backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"];

//     state = {
//         hari: "",
//         tanggal: "",
//         jam: "",
//         tempat: "",
//         acara: "",
//         keterangan: "",
//         color: this.backgroundColors[0]
//     };

//     createTodo = () => {
//         const { hari, tanggal, jam, tempat, acara, keterangan, color } = this.state

//         tempData.push({
//             hari,
//             tanggal,
//             jam,
//             tempat,
//             acara,
//             keterangan,
//             color
//         });

//         this.setState({ hari: "", tanggal: "", jam: "", tempat: "", acara: "", keterangan: "" });
//         this.props.backModal();
//     }

    // renderColors() {
    //     return this.backgroundColors.map(color => {
    //         return (
    //             <TouchableOpacity key={color} style={[styles.colorSelect, { backgroundColor: color }]}
    //                 onPress={() => this.setState({ color })}
    //             />
    //         )
    //     })
    // }
//     render() {
    //     return (
            // <KeyboardAvoidingView style={styles.container} >

            //     <ScrollView style={{ width: wp('100%') }}>
            //         <TouchableOpacity style={{ position: "absolute", top: hp('2.5%'), right: wp('4%'), justifyContent: "space-between" }} onPress={this.props.backModal}>

            //             <IconBack title=" " />

            //         </TouchableOpacity>

            //         <View style={{ alignSelf: "stretch", marginHorizontal: wp('5%') }}>
            //             <Text style={styles.title}>Input data Todo</Text>

            //             <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
            //                 <View>
            //                     <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Hari</Text>
            //                     <TextInput style={styles.hari} onChangeText={text => this.setState({ hari: text })} />
            //                 </View>
            //                 <View>
            //                     <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Tanggal</Text>
            //                     <TextInput style={styles.tanggal} onChangeText={text => this.setState({ tanggal: text })} />
            //                 </View>
            //                 <View>
            //                     <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Jam</Text>
            //                     <TextInput style={styles.jam} onChangeText={text => this.setState({ jam: text })} />
            //                 </View>

            //             </View>

            //             <View>
            //                 <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Tempat</Text>
            //                 <TextInput style={styles.tempat} onChangeText={text => this.setState({ tempat: text })} />
            //             </View>
            //             <View>
            //                 <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Acara</Text>
            //                 <TextInput style={styles.acara} multiline={true} numberOfLines={4} onChangeText={text => this.setState({ acara: text })} />
            //             </View>

            //             <View>
            //                 <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Keterangan</Text>
            //                 <TextInput style={styles.keterangan} onChangeText={text => this.setState({ keterangan: text })} />
            //             </View>



            //             <View style={{ flexDirection: "column", marginTop: 12, alignSelf: "center" }}>
            //                 <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", textAlign: "center", color: grey4 }}>Warna</Text>
            //                 <View style={{ flexDirection: "row", }}>
            //                     {this.renderColors()}
            //                 </View>
            //             </View>

            //             <TouchableOpacity style={[styles.create, { backgroundColor: this.state.color }]} onPress={this.createTodo}>
            //                 <Text style={{ color: colors.white, fontFamily: "Poppins-SemiBold", fontSize: hp('3%') }}>Create</Text>

            //             </TouchableOpacity>
            //         </View>
            //     </ScrollView>

            // </KeyboardAvoidingView>

    //     )
    // }
// }



// const styles = StyleSheet.create({
//     container: {
//         justifyContent: "space-between",
//         flex: 1
//     },

//     title: {
//         fontSize: hp('4%'),
//         fontFamily: "Poppins-SemiBold",
//         color: colors.black,
//         alignSelf: "center",
//         marginTop: hp('4%'),
//         marginBottom: hp('4%')
//     },
//     hari: {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderColor: colors.blue,
//         borderRadius: 6,
//         height: hp('6%'),
//         marginTop: hp('0.2%'),
//         width: wp('22%'),
//         fontSize: hp('3%'),
//     },
//     tanggal: {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderColor: colors.blue,
//         borderRadius: 6,
//         height: hp('6%'),
//         marginTop: hp('0.2%'),
//         width: wp('40%'),
//         paddingHorizontal: wp('1%'),
//         fontSize: hp('3%')
//     },
//     jam: {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderColor: colors.blue,
//         borderRadius: 6,
//         height: hp('6%'),
//         marginTop: hp('0.2%'),
//         width: wp('22%'),
//         paddingHorizontal: wp('1%'),
//         fontSize: hp('3%')
//     },
//     tempat: {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderColor: colors.blue,
//         borderRadius: 6,
//         height: hp('6%'),
//         marginTop: hp('0.2%'),
//         paddingHorizontal: wp('1%'),
//         fontSize: hp('3%')
//     },
//     acara: {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderColor: colors.blue,
//         textAlignVertical: "top",
//         borderRadius: 6,
//         height: hp('20%'),
//         marginTop: hp('0.2%'),
//         paddingHorizontal: wp('1%'),
//         fontSize: hp('3%')
//     },
//     keterangan: {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderColor: colors.blue,
//         borderRadius: 6,
//         height: hp('6%'),
//         marginTop: hp('0.2%'),
//         paddingHorizontal: wp('1%'),
//         fontSize: hp('3%')
//     },

//     create: {
//         borderRadius: 25,
//         height: hp('6%'),
//         marginTop: hp('2%'),
//         alignItems: "center",
//         justifyContent: "center",
//         marginHorizontal: wp('30%'),
//     },
//     colorSelect: {
//         width: 40,
//         height: 40,
//         borderRadius: 10,
//         marginHorizontal: wp('0.5%')
//     }
// })
