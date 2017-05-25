import React, { Component } from 'react';

import {
  Text
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello There {this.props.name}!</Text>
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