import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";

const useStyles = makeStyles({
  mainDailyReport: {
    backgroundColor: '#696969',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '4px',
    borderRadius: '2px',
    padding: '0.2em 0',
    alignItems: 'center'
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
    width: '34%',
    alignItems: 'flex-end'
  },
  DailyReportContitionDescription: {
    fontSize: '0.9em',
    textTransform: 'uppercase',
    fontWeight: '100',
    fontFamily: 'monospace',
  }

});


export default function FiveDays() {
  const APIKEY = '02e8d71b0387ff5174b1913ab68d9663'
  const location = 'London,UK'
  const connectionString = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${APIKEY}&units=metric&cnt=5`
  const classes = useStyles();

  const [days, setDays] = useState([])

  useEffect(() => {
    Axios.get(connectionString)
      .then(res => {
        setDays(res.data.list)
      })
      .catch(err => console.log(err))
  },[])

  console.log(days)


  // get the current date
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

  return (
    <div>
      {
        days.map((a, i) => (
          <div className={classes.mainDailyReport} key={i}>
            <div className={classes.DailyReportDay}>
              <span>{day.substring(0, 3).toUpperCase()}</span>
            </div>
            <div className={classes.DailyReportTemperature}>
              <span>
                {Math.floor(a.main.temp)}&#176;
              </span>
            </div>
            <div className={classes.DailyReportContition}>
              <span><img src={`http://openweathermap.org/img/w/${a.weather[0].icon}.png`} alt="img" /></span>
              <span className={classes.DailyReportContitionDescription}>{a.weather[0].description}</span>
            </div>
          </div>
        ))
      } 
    </div>
  )
}
