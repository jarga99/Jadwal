import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../utils/Colors'
import {grey1, grey2, white1 } from '../../utils/constan'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TodoList = (props) => { 

    /*
    Access the navigation prop from any component
    https://reactnavigation.org/docs/connecting-navigation-prop
    */
    const _useNavigation = useNavigation()
    
    const handleToGo = (screen) => {
        _useNavigation.navigate(screen)
    }

    return(
        <View style={{flexDirection:"column"}}>
        <TouchableOpacity style={[styles.listContainer, { backgroundColor: props.list.color }]} onPress={() => handleToGo('TodoDetail')}>
        
            <Text style={styles.listWaktu} numberOfLines={1}>
                {props.list.hari} {props.list.tanggal} <Text style={{color:grey2}}>{props.list.jam}</Text>
            </Text>
            <View style={styles.divider} />
            <View>
                <View style ={{alignItems:"center"}}>
                    <Text style={styles.tempat}>{props.list.tempat}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View>
                <View style ={{alignItems:"center"}}>
                    <Text style={styles.acara}>{props.list.acara}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View>
                <View style ={{alignItems:"center"}}>
                    <Text style={styles.keterangan}>{props.list.keterangan}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
        </View>
    );
   
   
};


const styles = StyleSheet.create({
    listContainer:{
        paddingVertical: hp('2%'),
        paddingHorizontal:wp('2%'),
        borderRadius: 10,
        marginHorizontal:wp('2%'),
        alignItems: "center",
        width:wp('75%'),
        height:hp('55%')
    },
    listWaktu:{
        fontSize:hp('3%'),
        height:hp('5%'),
        color: colors.white,
        flexDirection:"row",
        textTransform:"uppercase",
    },
    tempat:{
        fontSize:hp('3%'),
        textTransform:"uppercase",
        textAlign:"center",
        color: grey1
    },
    acara: {
        fontSize: hp('2.8%'),
        height:hp('35%'),
        color: colors.white
    },
    keterangan:{
        fontSize: hp('2.8%'),
        height:hp('35%'),
        color: colors.white
    },
    divider: {
        backgroundColor: white1,
        height: hp('0.2%'),
        paddingHorizontal:wp('43%')
    }
})
export default TodoList

