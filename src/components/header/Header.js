import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Progress from './Progress'
import Axios from 'axios'

const useStyles = makeStyles({
  mainTopHeader: {
    order: '1',
    backgroundColor: '#363636',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    height: '2em',
    padding: '1em',
    paddingBottom: '2em',
  },
  headerCity: {
    fontSize: '1.3em',
    width: '17%'
  },
  headerTime: {
    border: '1px solid #000',
    height: 'fit-content',
    fontSize: '0.6em',
    padding: '0.7em',
    borderRadius: '4px'
  },
  headerCurrentWeather: {
    fontSize: '1.5em'
  }
});
  

export default function Header() {
  const classes = useStyles();
  //set the time to current
  var dt = new Date();
  var hours = dt.getHours() ;
  hours = (hours % 12) || 12;
  var minutes = dt.getMinutes() ;
  var currentTime = hours + ":" + minutes;

  const APIKEY = '02e8d71b0387ff5174b1913ab68d9663'
  const location = 'London,UK'
  const connectionString = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}&units=metric&cnt=40`

  const [today, setToday] = useState([])

  useEffect(() => {
    Axios.get(connectionString)
      .then(res => {
        setToday(res.data.main.temp)
      })
      .catch(err => console.log(err))
  },[])

  console.log(today)

  return (
    <div className={classes.mainHeader}>
      <div className={classes.mainTopHeader}>
        <div className={classes.headerCity}> 
          <span>LONDON</span>
        </div>
        <div className={classes.headerTime}>
          <span>*** </span>
          <span>{currentTime} GTM</span>
          <span> ***</span>
        </div>
        <div className={classes.headerCurrentWeather}>
            {Math.floor(today)}&#176;
        </div>
      </div>
      <Progress />
    </div>
  )
}
