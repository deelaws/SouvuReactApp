import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  TouchableOpacity 
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import { Icon, } from 'react-native-elements';

import list_styles from '../styles/memory_list_style';
import container_styles from '../styles/main_container_style';

export default class MemoryView extends React.Component {

  memory_pressed(mname) {
    
    console.log("gaga");
    Alert.alert("Deatiled memory view", mname);
    {Actions.single_memory_view}
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    //this.memory_pressed = this.memory_pressed.bind(this);
  }
  
  getMemoriesFromSouvu() {
    console.log("getMemoriesFromSouvuAsync");
    fetch('http://10.0.2.2:5000/app/mems', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Waleed',
          lastName: 'Shahid',
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseJson.memories),
            loaded: true,
          });
        })
      .done();
  }

  renderMemory(memor) {
    return (//Actions.edit_memory
      <View style={list_styles.container}>
        <TouchableOpacity underlayColor={'#ff0000'} 
                          //onPress={this.memory_pressed.bind(this, memor.mem_name)}
                          onPress={() => Actions.single_memory_view({'mname': memor.mem_name,
                                                                     'minfo': memor.mem_info,
                                                                     'mid': memor.mem_id,
                                                                     'mtype': memor.mem_type,})}
                          >
          <View style={list_styles.subcontainer}>
            {memor.mem_type == "book-note" ? (
              <View style={list_styles.rowview}>
                <Icon  name='book' size={30} style={list_styles.iconstyle}/>
                <Text style={list_styles.bookinfo}>{memor.mem_name}</Text>
              </View>
            ) : (
              <View style={list_styles.rowview}>
                <Icon  name='attachment' size={30} style={list_styles.iconstyle}/>
                <Text style={list_styles.name}>{memor.mem_name}</Text> 
              </View>
            )}
            {/* <Text style={list_styles.title}>{memor.mem_name}:{memor.info}</Text> */}
          </View> 
        </TouchableOpacity >
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={container_styles.container}>
        <Text>
          Loading memories...
        </Text>
      </View>
    );
  }

  componentDidMount() {
    this.getMemoriesFromSouvu();
  }

  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={{flex: 3}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMemory.bind(this)}
          enableEmptySections={true}
          keyboardShouldPersistTaps={'always'}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={list_styles.separator} />}
        /> 
      </View>
    );
  }
}

AppRegistry.registerComponent('MemoryView', () => MemoryView);