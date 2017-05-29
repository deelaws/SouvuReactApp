/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  Image,
  ListView,
  StyleSheet
} from 'react-native';

import Blink from './memory/blink';
//import styles from './memory/memory_styles';
import MemoryView from './memory/memory';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class SouvuReactApp extends Component {
  render() {
    debugger;
    return (
        <View style={styles.container}>
          <View style={{flex: .8, backgroundColor: 'powderblue'}}> 
            <Text style={styles.welcome}>
              Memory App!
            </Text>
          </View>

          <View style={{flex: .5, backgroundColor: 'skyblue'}}> 
            <Blink text='Niyomi!' />
          </View >
          
          <MemoryView />
          
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
    fontSize: 40,
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
