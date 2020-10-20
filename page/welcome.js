import React from 'react';
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from 'react-native';
let logo = require('../assets/icon.png');
let gif = require('../assets/loading.gif');


export default function Welome({ navigation }) {

    setTimeout(() => {
        navigation.navigate("Navigator");
    }, 5000);

    return (
        <View style={styles.container}>
           
            <Image
                source={logo}
                style={{ width: 100, height: 100 }}
            />
            <Image
                source={gif}
                style={{ width: "75%", height: "5%" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3dd87',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
