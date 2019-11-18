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
    fontSize: '2em',
    padding: '10px',
    paddingLeft: '0',
    width: '20%'
  },
  DailyReportContition: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '35%',
    paddingRight: '0.3em',
    alignItems: 'flex-end'
  },
  DailyReportContitionDescription: {
    fontSize: '0.8em',
    textTransform: 'uppercase',
    fontWeight: '100',
    fontFamily: 'monospace',
  }

});


export default function FiveDays() {
  const APIKEY = '02e8d71b0387ff5174b1913ab68d9663'
  const location = 'London,UK'
  const connectionString = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${APIKEY}&units=metric&cnt=40`
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

    

  return (
    <div>
      {
        days.map((a, i) => (
          <div className={classes.mainDailyReport} key={i}>
            <div className={classes.DailyReportDay}>
              {
                a.dt_txt
              }
            </div>
            <div className={classes.DailyReportTemperature}>
              <span>
                {Math.floor(a.main.temp)}&#176;
              </span>
            </div>
            <div className={classes.DailyReportContition}>
              <span><img src={`http://openweathermap.org/img/w/${a.weather[0].icon}.png`} alt="img" /></span>
              <span className={classes.DailyReportContitionDescription}>
                {a.weather[0].description}
              </span>
            </div>
          </div>
        ))
      } 
    </div>
  )
}
