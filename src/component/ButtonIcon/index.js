import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconAdd,IconAddLetter,IconAddModal, IconBack, IconClose, IconEdit, IconHapus, IconLetter, IconNotif ,IconDisposisi} from '../../assets'
import { blue } from '../../utils/constan'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ButtonIcon = ({ title }) => {

    const Icon = () => {

        if (title === "Add List") return <IconAdd />

        if (title === "Add Letter") return <IconAddModal/>

        if (title === "Edit Data") return <IconAddLetter/>

        if (title === "Hapus") return <IconHapus/>

        if (title === "Edit") return <IconEdit/>

        if (title === "Disposisi") return <IconDisposisi/>
        
        if (title === " ") return <IconLetter/>

        if (title === "") return <IconNotif />

        if (title === "  ") return <IconBack/>

        if (title === "   ") return <IconClose/>


        return <IconAdd />
    }
    return (
        <View>
            <View style={{alignSelf:"center"}} >
                <Icon />
            </View>
            <Text style={styles.text} >{title}</Text>
        </View>

    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    text: {
        color: blue,
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        marginTop: hp('1%'),
        textAlign: 'center'
    }
})
