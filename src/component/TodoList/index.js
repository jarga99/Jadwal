import React,{useState} from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../utils/Colors'
import {grey1, grey2, white1 } from '../../utils/constan'
import TodoModal from '../TodoModal'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TodoList extends React.Component {

    state = {
        showListVariable: false
    }

    toggleListModal(){
        this.setState({showListVariable: !this.state.showListVariable})
    }

   render(){
    const list = this.props.list
    return(
        <View style={{flexDirection:"column"}}>
            <Modal animationType="slide" visible={this.state.showListVariable} onRequestClose={() => this.toggleListModal()}>

            <TodoModal list={list} backModal={() => this.toggleListModal()} />    
  
            </Modal>
        <TouchableOpacity style={[styles.listContainer, { backgroundColor: list.color }]} onPress={() => this.toggleListModal()}>
        
            <Text style={styles.listWaktu} numberOfLines={1}>
                {list.hari} {list.tanggal} <Text style={{color:grey2}}>{list.jam}</Text>
            </Text>
            <View style={styles.divider} />
            <View>
                <View style ={{alignItems:"center"}}>
                    <Text style={styles.tempat}>{list.tempat}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View>
                <View style ={{alignItems:"center"}}>
                    <Text style={styles.acara}>{list.acara}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View>
                <View style ={{alignItems:"center"}}>
                    <Text style={styles.keterangan}>{list.keterangan}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
   }
   
   
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


