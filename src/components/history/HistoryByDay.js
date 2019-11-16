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
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${APIKEY}&units=metric&dt=24&cnt=40
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
          data: response.list.map(day => {
            let descriptions = day.weather[0].description
            let icons = day.weather[0].icon
            let temperatures = day.main.temp
            let dates = day.dt_txt
            return [ dates, temperatures, descriptions, icons ]
          })
        })
        console.log(response)
      })
      .catch(error => console.log(error));
  }, []);
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Monday";
      break;
    case 1:
      day = "Tuesday";
      break;
    case 2:
      day = "Wednesday";
      break;
    case 3:
      day = "Thursday";
      break;
    case 4:
      day = "Friday";
      break;
    case 5:
      day = "Saturday";
      break;
    case  6:
      day = "Sunday";
      break;
    default: return 0  
  }
  // var dateToday = new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate()
  // var currentDates = fiveDays.currentDates
  // var currentTemps = fiveDays.temperatures
  // var descriptions = fiveDays.descriptions
  // var icons = fiveDays.icons
  console.log(fiveDays.data)

  return (
    <div className={classes.mainDailyReport}>
      {/* {
        currentTemps.map((t, i) => (
          <div key={i} className={classes.DailyReportTemperature}>
            <span>{t[i]}&#176;</span>
          </div>
        ))
      } */}
      <div className={classes.DailyReportDay}>
        <span>{day.substring(0, 3).toUpperCase()}</span>
      </div>
      <div className={classes.DailyReportTemperature}>
        <span>14&#176;</span>
      </div>
      <div className={classes.DailyReportContition}>
        <span>pict</span>
        <span>Weather Desc</span>
      </div>
    </div>
  )
}
