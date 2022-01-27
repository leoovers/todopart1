import React, { useState,useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles/styles';

export default function DetailScreen({navigation}) {
    const [todo, setTodo] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerRight: () => (
                <AntDesign style={styles.navButton} name="save" size={24} color="black"
                onPress={() => handleSaveClick(todo)} />
            ),
        })
    }), [navigation];

    function handleSaveClick(item) {
        console.log(item);
        navigation.navigate('Home',{todo: item})
    }

    return (
        
        <View style={styles.container}>
            <TextInput autoFocus={true} style={styles.newTask} onChangeText={text => setTodo(text)}
            value={todo} placeholder="Add new item" />
        </View>
    )
}
