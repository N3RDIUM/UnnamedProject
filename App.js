import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Components/Splash';
import config from './constants.json';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
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
