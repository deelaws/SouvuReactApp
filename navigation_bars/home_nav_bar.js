import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Navigator,
} from 'react-native';


import {
  Actions,
} from 'react-native-router-flux';

import { Icon, } from 'react-native-elements';

var {width} = Dimensions.get('window');

// Should come up with a way to get dynamic navigation bar height.
var height = 50; 

const styles = {
    navbarStyle:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        height:height ,
        position: 'absolute', //necessary because if no react-native-router-flux will put navbar at bottom ,bug maybe!
        top:0,
        width:width,
        backgroundColor: '#659df7',
        elevation:10
    },
    rowview:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    },
    navTitleContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    navTitle: {
        fontSize: 30,
    }
};

export default class HomeNavBar extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.navbarStyle}>
                <View style={styles.rowview}>
                    <TouchableOpacity > 
                        <Icon  name="menu"  size={40} />
                    </TouchableOpacity>
                    <View style={styles.navTitleContainer}>
                        <Icon  name="access-alarm" size={40} />
                        <Text style={styles.navTitle}>
                            <Text>Memory Jar</Text>
                        </Text>
                    </View>
                    <TouchableOpacity > 
                        <Icon  name="settings" size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};