import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDailyReport: {
    backgroundColor: '#b5b5b3',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '4px',
    borderRadius: '2px',
  },
  DailyReportDay: {
    fontSize: '1.4em',
    padding: '10px'
  },
  DailyReportTemperature: {
    fontSize: '1.5em',
    padding: '10px'
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
          <span>12*</span>
        </div>
        <div className={classes.DailyReportContition}>
          <span>pict</span>
          <span>Weather Desc</span>
        </div>
    </div>
  )
}
