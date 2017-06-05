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

// 3rd party libraries
import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';

import MainView from './main';
import AddMemoryView from './memory/add_memory';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="main" title="Main" component={MainView} initial={true} />
    <Scene key="add_memory" direction="vertical" title="Add Memory" component={AddMemoryView} />
  </Scene>
);

export default class SouvuReactApp extends Component {
  render() {
    debugger;
    return <Router scenes={scenes} />;
  }
}

AppRegistry.registerComponent('SouvuReactApp', () => SouvuReactApp);
