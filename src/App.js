import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import colors from './utils/Colors.js';
import { AddListModal, ButtonIcon, TodoList } from './component/index.js';
import tempData from '../tempData';
import { blue, white } from './utils/constan.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Router from './Router'


export default class App extends React.Component {
    state = {
        addTodoVisible: false,
        list: tempData,
    };


    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible });
    }

    renderList = list => {
        return <TodoList list={list} />
    }


    render() {

        return (
            <NavigationContainer>
                <Router/>
            </NavigationContainer>
            // <View style={styles.container}>

            //     <View style={[styles.headerApp, { backgroundColor: blue }]}>

            //         <View style={[styles.areaHead, { flexDirection: "row", justifyContent: "space-between", marginHorizontal: wp('2.5%'), flex: 1 }]} >

            //             <Text style={styles.textHead}>Todo</Text>

            //             <View style={{ flexDirection: "row" }}>
            //                 <View>

            //                     <TouchableOpacity style={styles.iconS}>

            //                         <ButtonIcon title=" " />
            //                     </TouchableOpacity>
            //                 </View>

            //                 <View>

            //                     <TouchableOpacity style={styles.iconN}>


            //                         <ButtonIcon title="" />
            //                     </TouchableOpacity>
            //                 </View>
            //             </View>

            //         </View>
            //     </View>


            //     {/* modal add list todo */}
            //     <Modal
            //         animationType="slide"
            //         visible={this.state.addTodoVisible}
            //         onRequestClose={() => this.toggleAddTodoModal()} >

            //         <AddListModal backModal={() => this.toggleAddTodoModal()} />
            //     </Modal>


            //     <View style={[styles.areaTitle, { flexDirection: "row" }]}>

            //         <View style={styles.divider} />

            //         <Text style={styles.title}>
            //             Daftar <Text style={{ fontWeight: "300", color: colors.blue }}>Acara</Text>
            //         </Text>

            //         <View style={styles.divider} />

            //     </View>

            //     <View style={{ marginVertical: hp('2%') }}>
            //         <TouchableOpacity onPress={() => this.toggleAddTodoModal()} >
            //             <ButtonIcon title="Add List" />
            //         </TouchableOpacity>
            //     </View>

            //     <View style={{ height: hp('60%'), position: "relative" }}>

            //         <FlatList
            //             data={tempData}
            //             keyExtractor={item => item.name}
            //             horizontal={true}
            //             showsHorizontalScrollIndicator={false}
            //             renderItem={({ item }) =>

            //                 this.renderList(item)}
            //         />
            //     </View>
            // </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    headerApp: {
        width: "100%",
        height: hp('8%'),
        position: "absolute",
        top: hp('0%'),
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    areaHead: {

        marginVertical: hp('0.8%')
    },
    textHead: {
        color: white,
        fontSize: 36,
        fontFamily: "Poppins-SemiBold",
    },
    iconS: {
        marginVertical: hp('1.1%'),
        paddingHorizontal:wp('3%')

    },
    iconN: {
        marginVertical: hp('1.1%'),

    },
    divider: {
        backgroundColor: colors.lightblue,
        height: 3,
        flex: 1,
        alignSelf: "center"
    },
    areaTitle: {
        marginTop: hp('8%'),
    },
    title: {
        fontSize: 38,
        fontFamily: "Poppins-SemiBold",
        color: colors.black,
        paddingHorizontal: wp('5%'),

    },

});

