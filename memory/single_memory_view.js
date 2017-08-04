import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';


import {
  Actions,
} from 'react-native-router-flux';

export default class SingleMemoryView extends Component {

    constructor(props) {
        super(props);
        this.state = { mem_name: props.mname,
                       mem_info: props.minfo};
    }

    saveMemory() {
        Alert.alert("Save needs to be implemented");
        {Actions.home}
    }

    render() {
        return (
            <View style={{flex: 1, marginBottom:50, marginTop:50}}>  
                <View> 
                    <Text style={styles.welcomemem}>
                        Edit your memory Mr {this.props.mname}
                    </Text>
                    <Text>
                        Enter Memory Name here.
                    </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(mname) => this.setState({mem_name: mname})}
                        value={this.state.mem_name}
                    />
                    <Text>
                        Enter Memory Info here.
                    </Text>
                    <TextInput
                        style={{height: 80, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(minfo) => this.setState({mem_info: minfo})}
                        value={this.state.mem_info}
                    />
                </View>
                <Button
                    onPress={() => this.saveMemory()}
                    title="Save"
                    color="#841584"
                    accessibilityLabel="Back to main page"
                />
            </View>

            
        );
    }
};