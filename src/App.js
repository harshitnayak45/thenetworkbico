import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
      </div>
    );
  }
}

export default App;
