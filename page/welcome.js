import React from 'react';
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from 'react-native';
import { Bubbles } from 'react-native-loader';
let logo = require('../assets/icon.png');
//let gif = require('../assets/loading.gif');


export default function Welome({ navigation }) {

    setTimeout(() => {
        navigation.navigate("Navigator");
    }, 3000);

    return (
        <View style={styles.container}>

            <Bubbles size={10} color="#9f0f31" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
