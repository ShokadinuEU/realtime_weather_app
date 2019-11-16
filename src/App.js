import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import History from './components/history/HistoryMain'

class App extends Component {
  state = {
    city: undefined,
  }

  
  getWeather = async e => {
    const API_KEY = "f322c16ca21d9c08b54608cf88c9971a";
    e.preventDefault();

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`);
    const data = await apiCall.json();
    if(data) {
      this.setState({
        city: data
      })
      console.log(data)
    }
  }

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
