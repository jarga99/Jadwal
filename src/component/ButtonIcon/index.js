import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAdd, IconBack, IconNotif } from '../../assets'
import colors from '../../utils/Colors'

const ButtonIcon = ({ title }) => {

    const Icon = () => {

        if (title === "Add List") return <IconAdd />

        if (title === "  ") return <IconNotif />

        if (title === " ") return <IconBack/>

        return <IconAdd />
    }
    return (
        <View>
            <View >
                <Icon />
            </View>
            <Text style={styles.text} >{title}</Text>
        </View>

    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    text: {
        color: colors.blue,
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center'
    }
})
