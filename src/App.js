import React, { Component } from 'react';
import './App.css';
//import HelloWorldApp from './component/helloworld/HelloWorldApp';
import BasicAuthApp from './component/basicAuth/BasicAuthApp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicAuthApp />
      </div>
    );
  }
}

export default App;