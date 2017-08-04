import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Blink from './memory/blink';
//import styles from './memory/memory_styles';
import MemoryView from './memory/memory';

export default class MainView extends Component {

  _onMemoryPress() {
    // 
    Alert.alert("I clicked a view!");
  }

  render() {
    return (
        <View style={styles.container}>
          {/* <TouchableHighlight activeOpacity={80} underlayColor = {'red'} onPress={this._onMemoryPress}>
            <Text style={styles.info}>"hello world"</Text>
          </TouchableHighlight> */}
          {/* <View style={{flex: .5, backgroundColor: 'skyblue'}}> 
            <Blink text='Niyomi!' />
          </View > */}
          
          <MemoryView />
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


AppRegistry.registerComponent('MainView', () => MainView);