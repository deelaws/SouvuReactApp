import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet
} from 'react-native';


import {
  Actions,
} from 'react-native-router-flux';

import container_styles from '../styles/main_container_style';

export default class FilterMemoryView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={container_styles.container}>  
                <View> 
                    <Text>
                        FilterMemoryView
                    </Text>
                </View>
                <Text>
                    FilterMemoryView
                </Text>
                <Text >
                    FilterMemoryView
                </Text>
            </View>
        );
    }
};