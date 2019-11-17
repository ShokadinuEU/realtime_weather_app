import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import FiveDays from './components/fiveDays/Index'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <FiveDays />
      </div>
    );
  }
}

export default App;
