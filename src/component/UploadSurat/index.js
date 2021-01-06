import React,{useState} from 'react'
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { IconBack } from '../../assets'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { blue, green, grey4, white1 } from '../../utils/constan';

const UploadSurat = (props) => {

    const [getJSurat, setJSurat] = useState("")
    const [getTSurat, setTSurat] = useState("")
    
    const [getFileMetaData, setFileMetaData] = useState({
        file_uri:"",
        file_name:""
    })
    
    const FilePicker = async () => {
        try {
            const res = await DocumentPicker.pick({
                type:[DocumentPicker.types.images]
            })
            if (res.uri != null) {
                setFileMetaData({file_uri:res.uri,file_name:res.name})
            }
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {

            }else {
                throw error
            }
        }
    }

    const DoUpload = () => {
        try {
            const _DoUpload = storage().ref(getFileMetaData.file_name).putFile(getFileMetaData.file_uri)
            _DoUpload.on("state_changed",snapshot => { 
                console.log(snapshot);        
            })    
            Alert.alert(
                'Photo uploaded!',
                'Your photo has been uploaded to Firebase Cloud Storage!',
                [
                    {
                        text:"Ok",
                        onPress: () => { 
                            setFileMetaData({file_uri:"",file_name:""})
                        }
                    }
                ]
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} >
            <TouchableOpacity style={{ position: "absolute", top: hp('2.5%'), right: wp('4%'), justifyContent: "space-between" }} onPress={props.backModal}>

                <IconBack title=" " />

            </TouchableOpacity>

            <View style={{ alignSelf: "stretch", marginHorizontal: wp('5%') }}>
                <Text style={styles.title}>Upload Surat</Text>


                <View>
                    <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Jenis Surat</Text>
                    <TextInput style={styles.jeniS} onChangeText={text => setJSurat(text)} />
                </View>
                <View>
                    <Text style={{ fontSize: hp('3%'), fontFamily: "Poppins-SemiBold", color: grey4 }}>Tambah Surat</Text>
                    <View style={{flexDirection:"row"}}>
                    <TextInput style={styles.upload} value={getFileMetaData.file_name} />
                    <TouchableOpacity style={styles.browse} onPress={() => FilePicker()}>
                        <Text style={[styles.txtUp,{fontFamily:"Poppins-SemiBold",fontSize:hp('3%')}]}>Browse</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={[styles.create,{backgroundColor:green}]} onPress={() => DoUpload()}>
                    <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp('3%'), color:white1}}>Upload</Text>
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
        marginBottom: hp('4%')
    },
  
    jeniS: {
        borderWidth: 2,
        borderColor:blue,
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
        width:wp('60%'),
        marginTop: hp('0.2%'),
        marginRight:wp('2%'),
        paddingHorizontal: wp('1%'),
        fontSize: hp('3%')
    },
    browse:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius:6,
        backgroundColor:blue,
        width:wp('28%'),
    },
    txtUp:{
        textAlign:"center",
        marginTop:hp('1%'),
        color:white1
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