import log from './logging';

log("App", "Initializing...");
import React from 'react';
import Nav from './navigation/tabs';

export default class App extends React.Component {
  render(){
    return (
      <Nav />
    );
  }
}
