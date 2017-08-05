import React, { Component } from 'react';


import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet
} from 'react-native';


/*
 * Get's memories from the back-end.
 *
 */
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
};


const onButtonPress = () => {

  getMemoriesFromSouvuAsync();
  Alert.alert("hello");
};


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Greeting name={display} />
    );
  }
}