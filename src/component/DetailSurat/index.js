import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { blue, grey0, grey2, grey3, grey4, red } from '../../utils/constan'
import { IconBack, ImgTodo } from '../../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailSurat = (props) => {

   const DoDownload = async (filename) => {
      const viewFile = RNFetchBlob.android
      let dirs = RNFetchBlob.fs.dirs
      const url = await storage().ref(filename).getDownloadURL()
      const type = await (await storage().ref(filename).getMetadata()).contentType
      // FIXME : membuat detector mimetype menjadi format typeS
      console.log(type.split(".")[1]);
      await RNFetchBlob.config({
         fileCache: true,
         addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: dirs.DownloadDir + "/" + filename,
            mime: type
         }
      })
         .fetch("GET", url)
         .then(res => {
            viewFile.actionViewIntent(res.path(), type)
         })
         .catch(err => { console.log(err) })
   }

   return (
      <View>
         <TouchableOpacity
            style={{
               position: 'absolute',
               top: hp('2.5%'),
               right: wp('4%'),
               justifyContent: 'space-between',
            }}
            onPress={props.backModal}>
            <IconBack title=" " />
         </TouchableOpacity>



         <View style={{ alignSelf: 'stretch', marginHorizontal: wp('5%') }}>
            <Text style={styles.title}>Detail Surat</Text>

            <View style={[styles.Vd, { flexDirection: "column", backgroundColor: grey0 }]} >
               <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.txtHead, { color: grey2 }]} >Jenis: get jenis surat</Text>
               </View>
               <Image style={styles.img} source={ImgTodo} />
               <Text style={styles.isi}>Nama: get nama file</Text>
            </View>





            <View style={{ marginBottom: hp('5%') }}>
               <TouchableOpacity
                  style={[styles.create, { backgroundColor: blue }]}
                  onPress={() => DoDownload()}>
                  <Text
                     style={{
                        color: colors.white,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: hp('3%'),
                     }}>
                     Download
              </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.hapus}
                  onPress
               >
                  <Text
                     style={{
                        color: colors.white,
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: hp('3%'),
                     }}
                  >
                     Hapus
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default DetailSurat

const styles = StyleSheet.create({
   title: {
      fontSize: hp('4%'),
      fontFamily: 'Poppins-SemiBold',
      color: colors.black,
      alignSelf: 'center',
      marginTop: hp('4%'),
      marginBottom: hp('4%'),
   },
   Vd: {
      height: hp('55%'),
      borderRadius: 5,
      borderColor: grey3,
      borderWidth: 4,
   },
   create: {
      height: hp('6%'),
      marginTop: hp('2%'),
      alignItems: 'center',
      justifyContent: 'center',
   },
   hapus: {
      backgroundColor: red,
      height: hp('6%'),
      marginTop: hp('2%'),
      alignItems: 'center',
      justifyContent: 'center',
   },
   txtHead: {
      fontSize: hp('2.7%'),
      fontFamily: "Poppins-SemiBold",
      height: hp('8%')
   },
   img: {
      borderRadius: 5,
      borderColor: grey3,
      height: hp('40%'),
      width: wp('90%'),
      borderWidth: 4,
      alignSelf: "center",
      marginVertical: 5
   },
   isi: {
      fontSize: hp('2.5%'),
      textTransform: "capitalize",
      color: grey4,
      height: hp('6%')
   }
})
