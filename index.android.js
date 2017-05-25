/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';

import Blink from './memory/blink';

const postSouvuApp = () => {
  fetch('http://192.168.0.103:5000/app/data/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: 'Waleed',
      lastName: 'Shahid',
    })
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });

};


function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        console.log(responseJson.movies);
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
}

function getMemoriesFromSouvuAsync() {
   console.log("getMemoriesFromSouvuAsync");
   return fetch('http://10.0.2.2:5000/app/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'Waleed',
        lastName: 'Shahid',
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
}

const onButtonPress = () => {

  getMemoriesFromSouvuAsync();
  Alert.alert("hello");
};

export default class SouvuReactApp extends Component {
  render() {
    debugger;
    return (
        <View style={styles.container}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}> 
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}}> 
            <Blink text='Niyomi!' />
          </View >
          <View style={{flex: 3, backgroundColor: 'steelblue'}}> 
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            
            <Button
              onPress={onButtonPress}
              title="Ok!"
              color="#841584"
              accessibilityLabel="Ok, Great!"
             />

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SouvuReactApp', () => SouvuReactApp);
