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

import MemoryView from './memory/memory';
import container_styles from './styles/main_container_style';

export default class MainView extends Component {

  render() {
    return (
        <View style={container_styles.container}>
          <MemoryView />
        </View>
    );
  }
}

AppRegistry.registerComponent('MainView', () => MainView);