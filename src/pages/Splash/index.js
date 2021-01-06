import React, { useEffect } from 'react'
import SharedPreferences from 'react-native-shared-preferences'
import {StyleSheet, View, Text } from 'react-native'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        
        setTimeout(() => {
            
            SharedPreferences.getItem("user_id",(val) => {
                console.log(val);
                if (val != null) {
                    navigation.replace("Home")
                }else{
                    navigation.replace('WelcomeAuth');
                }
            })

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
