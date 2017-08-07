import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Alert,
  View,
  StyleSheet
} from 'react-native';


import {
  Actions,
} from 'react-native-router-flux';

import { Icon,
    Button,
    SearchBar,
    FormLabel,
    FormInput  } from 'react-native-elements';

import container_styles from '../styles/main_container_style';
import home_styles from '../styles/home_view_style';

export default class HomeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={container_styles.container}>  
                <View style={home_styles.mainView}> 
                    <Text style={home_styles.memoryMessage}>
                        Your memory for today is
                    </Text>
                    <Icon name='book' reverse  size={50}/>
                    <Text style={home_styles.memoryName}>
                        Tumultuous
                    </Text>
                    <Text style={home_styles.memoryInfo}>
                        making a loud, confused noise; uproarious.
                    </Text>
                </View>
            </View>
        );
    }
};