import log from './logging';

log("App", "Initializing...");
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Nav from './navigation/tabs';

export default class App extends React.Component {
  render(){
    return (
      <Nav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
