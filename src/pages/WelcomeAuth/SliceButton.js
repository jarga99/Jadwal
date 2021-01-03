//Halaman yang menampung menampung component ButtonIcon

import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ButtonAksi } from '../../component';
import { blue,grey0 } from '../../utils/constan';

const SliceButton = ({ desc, title, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.desc}>{desc}</Text>
            <ButtonAksi title={title} onPress={onPress} />
        </View>
    )
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SliceButton

const styles = StyleSheet.create({

    container: {
        //styling untuk mengatur component deskripsi dan button
        alignItems: 'center',
        marginTop: windowHeight * 0.035
    },

    desc: {
        //styling untuk mengatur deskripsi
        fontSize: windowWidth * 0.05,
        paddingHorizontal:windowWidth *0.02,
        color: blue,
        textAlign: "center",
        marginBottom: 6
    },
})