import React, { useState,useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DetailScreen({navigation}) {
    const [todo, setTodo] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerRight: () => (
                <AntDesign style={styles.navButton} name="save" size={24} color="black"
                onPress={() => navigation.navigate('Home',{todo: todo})} />
            ),
        })
    }), [navigation];
    return (
        
        <View style={styles.container}>
            <TextInput style={styles.newTask} onChangeText={text => setTodo(text)}
            value={todo} placeholder="Add new task" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        paddingLeft: 10,
        paddingTop: 20,
    },
    navButton: {
        marginRight: 5,
        fontSize: 24,
        padding: 4,
    },
});
