import React from 'react'
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
  const classes = useStyles();
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
