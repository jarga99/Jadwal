import React,{useState} from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import colors from '../../utils/Colors'
import { IconBack } from '../../assets'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { grey4 } from '../../utils/constan';
import database from '@react-native-firebase/database';

const EditJadwal = (props) => {

    backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"];
    const [getHari, setHari] = useState("")
    const [getTanggal, setTanggal] = useState("")
    const [getJam, setJam] = useState("")
    const [getTempat, setTempat] = useState("")
    const [getAcara, setAcara] = useState("")
    const [getKeterangan, setKeterangan] = useState("")
    const [getColor, setColor] = useState(backgroundColors[0])
    
    const CreateTodo = async () => {
        try {
            var datas = {
                user_info:{
                    id:"",
                    email:""
                },
                event_detail:{
                    hari:getHari,
                    tanggal:getTanggal,
                    jam:getJam,
                    tempat:getTempat,
                    acara:getAcara,
                    keterangan:getKeterangan,
                    color:getColor
                },
                dateCreate:new Date().getTime()
            }  
            const eventId = new Date().getTime() + new Date().getDay()
            let DoInsert = await database().ref("/events/"+eventId)
            .set(datas)
            .then(() => {
                Alert.alert(
                    "Input Jadwal Berhasil",
                    "Anda Berhasil Menambhakan Jadwal",
                    [
                      { text: "OK", onPress: () =>  props.backModal() }
                    ],
                    { cancelable: false }
                  );
            })
        } catch (error) {
            Alert.alert("Gagal Input Jadwal",[{text:"OK"}],{ cancelable: false })
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
    return (
        <KeyboardAvoidingView style={styles.container} >

        <ScrollView style={{ width: wp('100%') }}>
            
            <TouchableOpacity style={{ position: "absolute", top: hp('2.5%'), right: wp('4%'), justifyContent: "space-between" }} onPress={props.backModal}>

                <IconBack title=" " />

            </TouchableOpacity>

            <View style={{ alignSelf: "stretch", marginHorizontal: wp('5%') }}>
                <Text style={styles.title}>Edit Data Jadwal</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
                    <View>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Hari</Text>
                        <TextInput style={styles.hari}  onChangeText={(hari) => {
                            setHari(hari)
                        }}/>
                    </View>
                    <View>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Tanggal</Text>
                        <TextInput style={styles.tanggal} onChangeText={text =>setTanggal(text)} />
                    </View>
                    <View>
                        <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Jam</Text>
                        <TextInput style={styles.jam} onChangeText={text => setJam(text)} />
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
                    <Text style={{ color: colors.white, fontFamily: "Poppins-SemiBold", fontSize: hp('3%') }}>Create</Text>

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
    hari: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        height: hp('6%'),
        marginTop: hp('0.2%'),
        width: wp('22%'),
        fontSize: hp('3%'),
    },
    tanggal: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        height: hp('6%'),
        marginTop: hp('0.2%'),
        width: wp('40%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    jam: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        height: hp('6%'),
        marginTop: hp('0.2%'),
        width: wp('22%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    tempat: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        height: hp('6%'),
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
        height: hp('6%'),
        marginTop: hp('0.2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },

    create: {
        borderRadius: 25,
        height: hp('6%'),
        marginTop: hp('2%'),
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: wp('30%'),
    },
    colorSelect: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginHorizontal: wp('0.5%')
    }
})
export default EditJadwal

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
