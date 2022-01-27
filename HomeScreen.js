import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles/styles';

const STORAGE_KEY = '@todo_key'

export default function HomeScreen({route,navigation}) {
    const [todos, setTodos] = useState([]);
    /*
    const [todos, setTodos] = useState(
        Array()
        .fill('')
        .map((_,i) => (`Test ${i}`))
    ); */

    useEffect(() => {
        if (route.params?.todo) {
            const newKey = todos.length + 1;
            const newTodo = {key: newKey.toString(), description: route.params.todo};
            const newTodos = [...todos, newTodo];
            storeData(newTodos);
        }
        getData();
    }, [route.params?.todo])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'black'
            },
            headerRight: () => (
                <AntDesign style={styles.navButton} name="plus" size={24} color="black"
                 onPress={() => navigation.navigate('Todo')} />  
            ),
        })
    }), [navigation];

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const getData = async() => {
        try {
            return AsyncStorage.getItem(STORAGE_KEY)
            .then (req => JSON.parse(req))
            .then(json => {
                if (json === null) {
                    json = [];
                }
                setTodos(json);
            })
            .catch (error => console.log(error));
        } catch (e) {
            console.log(e);
        }
    }

    function handleDeleteClick(key) {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = todos.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.key !== key;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setTodos(removeItem);
    storeData(removeItem);
  }

    return (
        <View style={styles.container}>
            <ScrollView>
            {
                todos.map((todo) => (
                    <View style={styles.rowContainer} key={todo.key}>
                        <Text style={styles.rowText}>{todo.description}</Text>
                        <AntDesign style={styles.navButton} name="delete" size={24}
                        onPress={() => handleDeleteClick(todo.key)} />
                    </View> 
                ))
            }
            </ScrollView>
        </View>
    )
}
