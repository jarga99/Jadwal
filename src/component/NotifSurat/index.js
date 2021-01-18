import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Modal,PermissionsAndroid} from 'react-native'
import { DetailSurat } from '../../component';
import { grey2,grey3, grey4} from '../../utils/constan.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NotifSurat = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        
        <View style={{marginBottom:10}}>
            <Modal
                animationType="slide"
                visible={modalVisible} >
                <DetailSurat namafile= {props.list.file_surat} idSurat={props.list.idSurat} backModal={() => {
                    setModalVisible(false)
                }} />
            </Modal>
            {/* <Button title="req" onPress={() => requestCameraPermission()}></Button> */}
            <TouchableOpacity style={[styles.NotiF, { backgroundColor: grey3 }]} onPress={() => {setModalVisible(true)}} >
                <View style={{ flexDirection: "column" }} >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={[styles.txtHead,{width:wp('65%'),color:grey2} ]} >Jenis: {props.list.jenis_surat}</Text>
                    </View>
                    <Text style={styles.isi}>Nama: {props.list.file_surat}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NotifSurat

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
