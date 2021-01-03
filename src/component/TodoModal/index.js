import React from 'react'
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text, KeyboardAvoidingView, TextInput, ScrollViewBase } from 'react-native'
import ButtonIcon from '../ButtonIcon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default class TodoModal extends React.Component {

    state = {
        hari: this.props.list.hari,
        tanggal: this.props.list.tanggal,
        jam: this.props.list.jam,
        tempat: this.props.list.tempat,
        acara: this.props.list.acara,
        keterangan: this.props.list.keterangan,
        color: this.props.list.color

    };

    // renderTodo = todo => {
    //     return (
    //         <View>
    //             <Text>{todo.title}</Text>
    //         </View>
    //     )
    // }

    render() {


        return (
            <SafeAreaView style={styles.container}>
                
                <TouchableOpacity style={{ position: "absolute", top: hp('2.5%'), right: wp('4%'), zIndex: 10 }} onPress={this.props.backModal}>

                    <ButtonIcon title="   " />

                </TouchableOpacity>

                <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]} >

                    <View style={{ flexDirection: "row" }}>

                        <Text style={styles.waktu}>{this.state.hari}</Text>
                        <Text style={styles.waktu}>{this.state.tanggal}</Text>
                        <Text style={styles.waktu}>{this.state.jam}</Text>
                    </View>

                </View>
                <ScrollView>

                <View style={[styles.section,styles.conten]}>
                    <Text style={[styles.tempat,styles.Todocontainer]}>{this.state.tempat}</Text>
                    <Text style={[styles.acara,styles.Todocontainer]}>{this.state.acara}</Text>
                    <Text style={[styles.keterangan,styles.Todocontainer]}>{this.state.keterangan}</Text>
                </View>
                </ScrollView>

                {/* <View style={[styles.section, { flex: 3 }]}>
                    <FlatList
                        renderItem={({ item }) => this.renderTodo(item)}
                        keyExtractor={item => item.title}
                        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 30 }}
                        showsVerticalScrollIndicator={false}
                    >
                    </FlatList>
                </View> */}

                <KeyboardAvoidingView style={[styles.section,{marginTop:hp('10%')}]}>
                    <View style={styles.footer}>

                        <TextInput style={[styles.input, { borderColor: this.state.color }]} />
                        <TouchableOpacity style={[styles.addTodo, { borderColor: this.state.color }]}>

                            <ButtonIcon title="    " />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        flex: 1,
        alignSelf: "stretch",
    },
    header: {
        justifyContent:"flex-end",
        alignItems:"center",
        borderBottomWidth: 3
    },
    waktu:{
        textTransform:"uppercase",
        fontSize:hp('3%'),
        fontFamily: "Poppins-SemiBold",
        paddingVertical:hp('1%')
    },
    conten:{
        paddingVertical:64,
        paddingHorizontal:32,
    },
    footer: {
        flex: 1,
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    Todocontainer:{
        paddingVertical:hp('1%'),
        fontSize:hp('3%')
    },
    input: {
        flex: 1,
        height: 55,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8
    },
    addTodo: {
        padding: 16,
        marginTop: hp('4.5%')

    }
});
