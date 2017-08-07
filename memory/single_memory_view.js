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
        this.state = {mem_name: props.mname,
                      mem_info: props.minfo,
                      mem_id: props.mid,
                      mem_type: props.mtype,
                      updated: false,
                      deleted: false};
    }

    saveMemory() {
        console.log("Saving edited Memory");
        fetch('http://10.0.2.2:5000/mem/edit/' + this.state.mem_id, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mem_name: this.state.mem_name,
                mem_info: this.state.mem_info,
                mem_type: this.state.mem_type,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                updated:true,});
            }
        )
        .done(console.log("Memory saved successfuly"));

        {Actions.home}
    }

    deleteMemory() {
        console.log("Deleting a memory");
        fetch('http://10.0.2.2:5000/mem/delete/' + this.state.mem_id, {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                deleted:true,});
            Actions.pop();
            })
        .done(console.log("Memory saved successfuly"));

        {Actions.home}
    }

    render() {
        return (
            <View style={{flex: 1, marginBottom:50, marginTop:50}}>  
                <View>
                    <Text>
                        Memory ID is {this.props.mid}
                    </Text> 
                    <Text>
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
                    accessibilityLabel="Save the edited memory"
                />
                <Button
                    onPress={() => this.deleteMemory()}
                    title="Delete"
                    color="#841584"
                    accessibilityLabel="Delete Memory"
                />
            </View>

            
        );
    }
};