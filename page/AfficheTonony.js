import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container,  Header, Content, Footer, Right, Body, Title, Text } from 'native-base';

import * as Font from 'expo-font';

let logo = require('../assets/icon.png');

export default function AfficheTonony({ route, navigation }) {
    //reto no maka anle valeur alefa otran post ihany
    const { titre } = route.params;
    const { contenu } = route.params;
    const { refrain } = route.params;

    return (
        <Container style={styles.container}>
            <StatusBar hidden={true} />
            <Header style={styles.header}>
                <Body style={styles.titleView}>
                    <View >
                        <Title style={styles.title}>{titre}</Title>
                    </View>
                </Body>

            </Header>
            <Content>
                <View style={styles.list}>
                    <Text style={styles.tonony}>{contenu}</Text>

                </View>
                <View style={styles.listRefrain}>
                    <Text style={styles.tononyRefrain}>{refrain}</Text>
                </View>

            </Content>

            <Footer style={styles.footer}>
                <Right>
                    <View style={styles.imgView}>
                        <Image source={logo} style={styles.img} />
                    </View>
                </Right>
            </Footer>
        </Container>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3e8e8',

    },
    header: {
        backgroundColor: '#9f0f31',
        height: 60,


    },
    titleView: {
        width: 'auto',
        height: "auto",
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 28,
        color: '#e3dd87',
        fontStyle: 'italic',
    },

    imgView: {
        width: 80,
    },
    img: {
        width: '100%',
        height: '100%',

    },
    list: {
        marginTop: 50,
        marginBottom: 20,
        flex: 1,
        height: "100%",

    },
    tonony: {
        fontSize: 17,
        paddingLeft: 18,
    },
    listRefrain: {
        marginLeft: 25,

    },
    tononyRefrain: {
        fontSize: 17,
        paddingLeft: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#f3e8e8',
        padding: 10,
        height: 100,
    }

});
