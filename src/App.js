import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import colors from './utils/Colors.js';
import { AddListModal, ButtonIcon, TodoList } from './component/index.js';
import tempData from '../tempData';



export default class App extends React.Component {
    state = {
        addTodoVisible: true
    };

    toggleAddTodoModal(){
        this.setState({ addTodoVisible: !this.state.addTodoVisible});
    }


    render() {
        return (
            <View style={styles.container}>
                <Modal 
                animationType="slide" 
                visible={this.state.addTodoVisible}
                onRequestClose={() => this.toggleAddTodoModal()} >
                    
                    <AddListModal backModal={() => this.toggleAddTodoModal()}/>
                </Modal>

                <View style={{ flexDirection: "row" }}>

                    <View style={styles.divider} />

                    <Text style={styles.title}>
                        Todo <Text style={{ fontWeight: "300", color: colors.blue }}>List</Text>
                    </Text>

                    <View style={styles.divider} />

                </View>

                <View style={{ marginVertical: 48 }}>
                    <TouchableOpacity onPress={() => this.toggleAddTodoModal()} >
                        <ButtonIcon title="Add List" />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 300 }}>

                    <FlatList
                        data={tempData}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>

                        <TodoList list={item} />}

                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: "center"
    },
    title: {
        fontSize: 38,
        fontFamily: "Poppins-SemiBold",
        color: colors.black,
        paddingHorizontal: 64
    },

});
