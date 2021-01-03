//Mendesain Component Button Login dan Register

import React from 'react'
import { StyleSheet, Text, Dimensions,TouchableOpacity } from 'react-native'
import { blue,white } from '../../utils/constan'

const ButtonAksi = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.btnComponent} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ButtonAksi

const styles = StyleSheet.create({

    btnComponent: {
        //styling untuk button
        paddingVertical: windowHeight * 0.013,
        width: windowWidth * 0.6,
        backgroundColor: blue,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    title: {
        //styling untuk label button
        fontSize: windowHeight*0.025,
        fontWeight: 'bold',
        color: white,
        textAlign: 'center',
        textTransform: 'capitalize'
    },

})