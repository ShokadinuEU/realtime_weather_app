import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import History from './components/history/HistoryMain'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <History />
      </div>
    );
  }
}

export default App;
