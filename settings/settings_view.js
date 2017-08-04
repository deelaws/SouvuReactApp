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

export default class SettingsView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{flex: 1}}>  
                <View> 
                    <Text style={styles.welcomemem}>
                        Settings page
                    </Text>
                </View>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
                <Text style={styles.welcomemem}>
                    Settings page
                </Text>
            </View>
        );
    }
};