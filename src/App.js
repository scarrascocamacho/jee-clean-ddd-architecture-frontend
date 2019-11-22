import React, { Component } from 'react';
import './App.css';
//import HelloWorldApp from './component/helloworld/HelloWorldApp';
import AuthApp from './component/auth/AuthApp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthApp />
      </div>
    );
  }
}

export default App;