import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({route,navigation}) {
    const [todos, setTodos] = useState(
        Array()
        .fill('')
        .map((_,i) => (`Test ${i}`))
    );

    useEffect(() => {
        if (route.params?.todo) {
            const newTodos = [...todos,route.params?.todo];
            setTodos(newTodos);
        }
    }, [route.params?.todo])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerRight: () => (
                <AntDesign style={styles.navButton} name="plus" size={24} color="black"
                 onPress={() => navigation.navigate('Todo')} />
            ),
        })
    }), [navigation];

    return (
        <View style={styles.container}>
            <ScrollView>
            {
                todos.map((todo,index) => (
                    <View style={styles.rowContainer} key={index}>
                        <Text style={styles.rowText}>{todo}</Text>
                    </View>
                ))
            }
            </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    rowText: {
        fontSize: 20,
        marginLeft: 5,
    },
    navButton: {
        marginRight: 5,
        fontSize: 24,
        padding: 4
    },
});

