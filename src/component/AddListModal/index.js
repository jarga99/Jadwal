import React from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import colors from '../../utils/Colors'
import { IconBack } from '../../assets'


export default class AddListModal extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" >
                <TouchableOpacity style={{position:"absolute", top:64, right:32}} onPress={this.props.backModal}>
                    <IconBack title=" " />
                </TouchableOpacity>

                <View style={{alignSelf:"stretch", marginHorizontal:32}}>
                    <Text style={styles.title}>Input data Todo</Text>
                </View>

            </KeyboardAvoidingView>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        flex:1,
        alignItems:"center",
    },
    title:{
        fontSize: 20,
        fontWeight: "800",
        color: colors.black,
        alignSelf:"center",
        marginBottom:16
    }
})
