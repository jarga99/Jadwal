import React, {useState,useEffect} from 'react';
import database from '@react-native-firebase/database';
import { View, Text, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import { ButtonIcon, NotifAktif } from '../../component';
import { blue, white, grey1, white1 } from '../../utils/constan.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconLetter, IconLogout, IconNotif } from '../../assets/index.js';


const Notifikasi = ({ navigation }) => {


    const [getNotifikasi, setNotifikasi] = useState("")

    useEffect(() => {
        var arrData = []
        let datas = database().ref('/events/').once('value').then(snpashot => {
            snpashot.forEach(element => {
                let _datas = element.val().event_detail.notifikasi
                arrData.push(_datas)
            })
            setSurat(arrData)
        })
    }, [])

    const RenderListNotifikasi = ({item}) => {
        return <NotifAktif list={item}/>
    }

    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.container}>

            <View style={[styles.headerApp, { backgroundColor: blue }]}>

                <View style={[styles.areaHead, { flexDirection: "row", justifyContent: "space-between", marginHorizontal: wp('2.5%'), flex: 1 }]} >

                    <Text style={styles.textHead}>Todo</Text>

                    <View style={{ flexDirection: "row", marginTop: hp('-1%') }}>
                        <View>

                            <TouchableOpacity style={styles.iconS} onPress={() => handleGoTo('Surat')}>
                                <View style={{ alignItems: "center" }}>

                                    <IconLetter />
                                    <Text style={styles.txtI}>Surat</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.iconN} onPress={() => handleGoTo('Notifikasi')}>
                                <View style={{ alignItems: "center" }}>

                                    <IconNotif />
                                    <Text style={styles.txtI}>Notifikasi</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.iconL} >
                                <View style={{ alignItems: "center" }}>

                                    <IconLogout />
                                    <Text style={styles.txtI}>Log Out</Text>
                                </View>
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

            <FlatList data={getNotifikasi}
            keyExtractor={items => console.log(items)}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            renderItem={(item) => RenderListNotifikasi(item)}
            />

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

        marginVertical: hp('0.8%')
    },
    textHead: {
        color: white,
        fontSize: 36,
        fontFamily: "Poppins-SemiBold",
    },
    iconS: {
        marginVertical: hp('1.1%'),
        paddingHorizontal: wp('2%')

    },
    iconN: {
        marginVertical: hp('1.1%'),
        paddingHorizontal: wp('2')


    },
    iconL: {
        marginVertical: hp('1.1%'),

    },
    txtI: {
        color: white1,
        fontFamily: "Poppins-SemiBold",
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

export default Notifikasi

