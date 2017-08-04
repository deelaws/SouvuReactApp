/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  Alert,
  View,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// 3rd party libraries
import {
  Actions,
  Router,
  Scene,
  Reducer,
  Modal,
} from 'react-native-router-flux';

import MainView from './main';
import AddMemoryView from './memory/add_memory';
import Blink from './memory/blink';
import TabView from './memory/TabView';
import SettingsView from './settings/settings_view';
import HomeView from './memory/home_view';
import SingleMemoryView from './memory/single_memory_view';
import FilterMemoryView from './memory/filter_view';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
    // add an edit memory scene
    // add a settings scene

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: 'white',
  //shadowOpacity: 1,
  shadowRadius: 3,
});


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fcffb7', 
    justifyContent: 'center',
    
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#fcffb7',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
};

   function settingViewButton() {
         // 
    Alert.alert("I clicked settings view");
  };

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
      <Scene key="tabbar" tabs tabs={true}  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor='#fcffb7'>
          <Scene key="tab1"  title="Home" icon={TabIcon} navigationBarStyle={{backgroundColor:'#fcffb7'}} titleStyle={{color:'white'}}>
            <Scene key="home" 
                  component={HomeView} 
                  title="Memory Jar!" 
                  titleStyle={{color:'black'}}
                  initial={true}
                  leftTitle="Settings" 
                  onLeft={() => alert('Right button')}
                />
              
            <Scene key="setting_page" 
                component={SettingsView} 
                title="Settings Tab"
                hideTabBar={false}
                titleStyle={{color:'black'}}
              />
          </Scene>
          <Scene key="tab4"  title="Your Memories"  icon={TabIcon}>
            <Scene key="main" 
              component={MainView} 
              title="Memory App" 
              //onRight={() => Actions.settings}//{} 
              //rightTitle="Settings" 
              // rightButtonIcon={"arrow-back"} 
              //rightButtonIconSize={30} 
              //rightTitle="hello"
              onEnter={()=>console.log('onEnter')}
              onExit={()=>console.log('onExit')}
              onRight={() => Actions.filter_view()}
              rightTitle="Filter"
            />
            <Scene key="single_memory_view" 
              component={SingleMemoryView} 
              title="Edit Memory"
              hideTabBar={true}
              titleStyle={{color:'black'}}
            />
            <Scene key="filter_view" 
              component={FilterMemoryView} 
              title="Filter Memories"
              hideTabBar={true}
              titleStyle={{color:'black'}}
            />
          </Scene>
          <Scene key="tab5"  title="Add Memories" icon={TabIcon}>
            <Scene key="add_memory" 
                component={AddMemoryView} 
                title="Add a Memory" 
                titleStyle={{color:'black'}}
              />
            </Scene>
          </Scene>
      </Scene>
    
  
);

export default class SouvuReactApp extends React.Component {
  clickMe() {
    alert('Hi!');
  }

  get_toucable() {
    return (<TouchableOpacity onPress={this.clickMe.bind(this)}>
          <View style={styles.box}>
            <Text>Hello {this.props.name}. Please click me.</Text>
          </View>
        </TouchableOpacity>);
  }

  render_d() {
    return (
      <View style={styles.container}>
        {this.get_toucable()}
      </View>
    );
  }
  render() {
    //debugger;
    return <Router createReducer={reducerCreate}  getSceneStyle={getSceneStyle}  scenes={scenes} 
      navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}
    />;
    //return <Blink text='Niyomi!' />;
  }
}


styles = StyleSheet.create({
  navBar: {
      backgroundColor:'#0D47A1',
  },
  navBarTitle:{
      color:'#FFFFFF'
  },
  barButtonTextStyle:{
      color:'#FFFFFF'
  },
  barButtonIconStyle:{
      tintColor:'rgb(255,255,255)'
  },
});

AppRegistry.registerComponent('SouvuReactApp', () => SouvuReactApp);
