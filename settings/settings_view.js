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

export default class SettingsView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={container_styles.container}>  
                <View> 
                    <Text >
                        Settings page
                    </Text>
                </View>
                <Text >
                    Settings page
                </Text>
                <Text>
                    Settings page
                </Text>
            </View>
        );
    }
};