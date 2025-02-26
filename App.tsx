import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const [count, setCount] = useState(0); //sayaç değeri

    const increment = () => setCount(count +1); //sayaç artırmak için
    const decrement = () => setCount(count -1); //sayaç azaltmak için
    const reset = () => setCount(0); //sayaç sıfırlamak için

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sayaç Uygulaması </Text>
            <Text style={styles.counter}> {count} </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text style={styles.buttonText}>Arttır</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text style={styles.buttonText}>Azalt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={reset}>
                    <Text style={styles.buttonText}>Sıfırla</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ADD8E6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    counter: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'80%',
    },
    button: {
        backgroundColor: '#6200ea',
        padding: 15,
        borderRadius: 8,
        margin: 5,
    },
    buttonText: {
        color:'white',
        fontSize: 18,
    },
});

export default App;