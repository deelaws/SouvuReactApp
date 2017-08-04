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

export default class HomeView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{flex: 1, marginBottom:50, marginTop:50}}>  
                <View> 
                    <Text style={styles.welcomemem}>
                        Your memory for today is
                    </Text>
                </View>
            </View>
        );
    }
};