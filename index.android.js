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

import { Icon,
        SearchBar,
        FormLabel,
        FormInput  } from 'react-native-elements';

import MainView from './main';
import AddMemoryView from './memory/add_memory';
import Blink from './memory/blink';
import TabView from './memory/TabView';
import SettingsView from './settings/settings_view';
import HomeView from './memory/home_view';
import SingleMemoryView from './memory/single_memory_view';
import FilterMemoryView from './memory/filter_view';
import HomeNavBar from './navigation_bars/home_nav_bar'

import nav_sytle from './styles/nav_bar_style';

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
    backgroundColor: '#659df7',
    height:55,
  },
  tabBarSelectedItem: {
    shadowColor: 'green',
    opacity:30,
  },
});


//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
  render() {
    var color = this.props.selected ? 'purple' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        {/* <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/> */}
         {this.props.selected ? 
            (<Icon raised name={this.props.title} size={30} />) :
            <Icon  reverse name={this.props.title} size={30} />
         }
      </View>
    );
  }
}

   function settingViewButton() {
         // 
    Alert.alert("I clicked settings view");
  };

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="tabbar" tabs tabs={true} 
            tabBarSelectedItemStyle={styles.tabBarSelectedItem}  
            tabBarStyle={styles.tabBarStyle}
                activeBackgroundColor='#659df7'>
        <Scene key="tab1"  
               title="home"
               icon={TabIcon}
               navBar={HomeNavBar}
               titleStyle={{color:'white'}}>
          <Scene key="home"
                component={HomeView} 
                title="Memory Jar!"
                initial={true}
                icon={()=> <Icon   name='setting' size={30}/>}
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
        <Scene key="memoryViewTab"  
           title="view-list"
           icon={TabIcon}>
          <Scene key="main" 
            component={MainView} 
            title="Memory App"
            onEnter={()=>console.log('onEnter')}
            onExit={()=>console.log('onExit')}
            onRight={() => Actions.filter_view()}
            rightTitle="Filter"
          />
          <Scene key="single_memory_view" 
            component={SingleMemoryView} 
            title="Edit Memory"
            hideTabBar={true}
            direction="vertical"
            titleStyle={{color:'black'}}
          />
          <Scene key="filter_view" 
            component={FilterMemoryView} 
            title="Filter Memories"
            hideTabBar={true}
            direction="fade"
            titleStyle={{color:'black'}}
          />
        </Scene>
        <Scene key="memoryAddTab"  title="note-add" icon={TabIcon}>
          <Scene key="add_memory" 
              component={AddMemoryView} 
              title="Add a Memory"
            />
          </Scene>
        </Scene>
    </Scene>
    
  
);

export default class SouvuReactApp extends React.Component {
  clickMe() {
    alert('Hi!');
  }

  render() {
    //debugger;
    return <Router createReducer={reducerCreate}  
      getSceneStyle={getSceneStyle}  
      scenes={scenes} 
      navigationBarStyle={nav_sytle.navBar} 
      titleStyle={nav_sytle.navBarTitle} 
      barButtonTextStyle={nav_sytle.barButtonTextStyle} 
      barButtonIconStyle={nav_sytle.barButtonIconStyle}
    />;
  }
}

AppRegistry.registerComponent('SouvuReactApp', () => SouvuReactApp);