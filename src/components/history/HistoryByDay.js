import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDailyReport: {
    backgroundColor: '#696969',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '4px',
    borderRadius: '2px',
    padding: '0.7em 0'
  },
  DailyReportDay: {
    fontSize: '1.4em',
    padding: '10px',
    paddingLeft: '1em'
  },
  DailyReportTemperature: {
    fontSize: '1.5em',
    padding: '10px',
    paddingLeft: '0'
  },
  DailyReportContition: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '45%'
  }

});


export default function HistoryByDay() {
  const APIKEY = 'f322c16ca21d9c08b54608cf88c9971a'
  const location = 'London,UK'
  const classes = useStyles();

  const [fiveDays, setFiveDays] = useState([])

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${APIKEY}&units=metric
      `,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setFiveDays({
          descriptions: response.list.map(day => day.weather[0].description),
          icons: response.list.map(day => day.weather[0].icon),
          temperature: response.list.map(day => day.main.temp),
          currentDate: response.list.map(day => day.dt_txt),
        })
      })
      .catch(error => console.log(error));
  }, []);
  const dateToday = new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate()
  const currentDates = fiveDays.currentDate
  var day;
  console.log(currentDates)

  return (
    <div className={classes.mainDailyReport}>
        <div className={classes.DailyReportDay}>
          <span>Mon</span>
        </div>
        <div className={classes.DailyReportTemperature}>
          <span>17&#176;</span>
        </div>
        <div className={classes.DailyReportContition}>
          <span>pict</span>
          <span>Weather Desc</span>
        </div>
    </div>
  )
}
