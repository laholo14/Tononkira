import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Subtitle, Header, Content, List, ListItem, Right, Body, Title, Text } from 'native-base';
import TononyAll from './TononyAll';



let logo = require('../assets/icon.png');

export default function All({ navigation }) {
  //fonction mandefa makany amin le tononkira
  const Alefa = (titre, contenu, refrain) => {
    navigation.navigate('AfficheTonony', { titre: titre, contenu: contenu, refrain: refrain });
  }

  return (
    <Container style={styles.container}>
      <StatusBar hidden={true} />
      <Header style={styles.header}>

        <Body>
          <View style={styles.titleView}>
            <Title style={styles.title}>Tononkira Mpanentana</Title>
            <Subtitle style={styles.soustitre}>Ireo Hira rehetra</Subtitle>
          </View>
        </Body>
        <Right>
          <View style={styles.imgView}>
            <Image source={logo} style={styles.img} />
          </View>

        </Right>
      </Header>

      <Content style={styles.list}>
        <List >
          <FlatList
            data={TononyAll}
            renderItem={({ item }) => {
              return (
                <ListItem style={styles.Contenulist}>
                  <TouchableOpacity
                    onPress={() => Alefa(item.title, item.contenu, item.refrain)}>
                    <View>
                      <Text style={styles.listText}>{item.key}- {item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </ListItem>
              );
            }}
          />
        </List>
      </Content>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3e8e8',

  },
  header: {
    backgroundColor: '#9f0f31',
    height: 100,

  },
  titleView: {
    width: 280,

  },
  title: {
    fontSize: 25,
    color: '#e3dd87',

  },
  soustitre: {
    paddingLeft: 50,
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imgView: {
    width: 60,
  },
  img: {
    width: '100%',
    height: '100%',

  },
  list: {
    marginTop: 25,
    marginBottom: 35,

  },
  Contenulist: {
    borderWidth: 3,
    borderColor: '#e3dd87',
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  listText: {
    color: '#000',
    fontSize: 20,
    paddingBottom: 1,

  },
});
