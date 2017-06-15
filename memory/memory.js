import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
  ListView
} from 'react-native';


import styles from './memory_styles';

export default class MemoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };

    // Toggle the state every second
    //setInterval(() => {
    //  this.setState({ showText: !this.state.showText });
    //}, 1000);
  }
  
  getMemoriesFromSouvu() {
    //console.log("getMemoriesFromSouvuAsync");
    fetch('http://10.0.2.2:5000/app/mems', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Waleed',
          lastName: 'Shahid',
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseJson.memories),
            loaded: true,
          });
        })
      .done();
  }

  

  renderMemory(memor) {
    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{memor.mem_name}:{memor.info}</Text>
          <Text style={styles.year}>{memor.mem_info}</Text>
        </View>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading memories...
        </Text>
      </View>
    );
  }

  componentDidMount() {
    this.getMemoriesFromSouvu();
  }

  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={{flex: 3, backgroundColor: 'steelblue'}}> 
          <View> 
            <Text style={styles.welcomemem}>
              Your Memories
            </Text>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMemory}
            style={{flex: 1, backgroundColor: 'pink'}}
          />
          
      </View>
    );
  }
}

AppRegistry.registerComponent('MemoryView', () => MemoryView);