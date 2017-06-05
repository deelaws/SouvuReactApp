import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
  TextInput,
  ListView,
  Picker,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import styles from './memory_styles';

export default class AddMemoryView extends Component {

    constructor(props) {
        super(props);
        this.state = { mem_name: 'Memory Name',
                       mem_info: 'Information',
                       mem_type: 'Memory Type' };
    }

    add_memory () {
        Alert.alert("Will add the memory soon!");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: .8, backgroundColor: 'powderblue'}}> 
                    <Text style={styles.welcome}>
                        Add Memory
                    </Text>
                </View>

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


                <Picker
                    selectedValue={this.state.mem_type}
                    onValueChange={(lang) => this.setState({mem_type: lang})}>
                    <Picker.Item label="Vocubulary Word" value="java" />
                    <Picker.Item label="Thought" value="js" />
               </Picker>

                <View style={{flex: 4, backgroundColor: 'pink'}}> 

                    <Button
                        onPress={this.add_memory}
                        title="Add Memory Now!"
                        color="#841584"
                        accessibilityLabel="Back to main page"
                    />
                    <Button
                        onPress={Actions.main}
                        title="View Memories"
                        color="#841584"
                        accessibilityLabel="Back to main page"
                    />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('AddMemoryView', () => AddMemoryView);