import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import colors from './utils/Colors.js';
import { TodoList } from './component/index.js';
import tempData from '../tempData';
import { white } from './utils/constan.js';
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
                <Router />
            </NavigationContainer>
           
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
        paddingHorizontal: wp('3%')

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

