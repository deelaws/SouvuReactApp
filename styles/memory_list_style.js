import {
  StyleSheet
} from 'react-native';


export default list_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  subcontainer: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  iconstyle:{
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  rowview:{
    flex: 1, 
    flexDirection: 'row',
  },
  name: {
    marginLeft: 12,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  bookinfo: {
    fontSize: 20,
    marginLeft: 12,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});