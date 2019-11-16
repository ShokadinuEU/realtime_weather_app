import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import History from './components/history/HistoryMain'
import Axios from 'axios';

class App extends Component {
  state = {
    city: undefined,
  }

  
  getWeather = async e => {
    e.preventDefault();
    const API_KEY = "f322c16ca21d9c08b54608cf88c9971a";

    const apiCall = await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=london&APPID=${API_KEY}`);
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
