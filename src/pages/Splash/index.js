import React, { useEffect } from 'react'
import {StyleSheet, View, Text } from 'react-native'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>

            <View style={{justifyContent:"space-between"}}>
                <Text style={{textAlign:"center"}} >Todo</Text>
                <Text style={{textAlign:"center"}} >Loading. . .</Text>
            </View>
        </View>
    )
};
export default Splash

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});
