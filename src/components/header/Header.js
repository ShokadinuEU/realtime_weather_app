import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Progress from './Progress'
import { borderRadius } from '@material-ui/system';

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
    fontSize: '1.1em'
  }
});
  

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.mainHeader}>
      <div className={classes.mainTopHeader}>
        <div className={classes.headerCity}> 
          <span>LONDON</span>
        </div>
        <div className={classes.headerTime}>
          <span>*** </span>
          <span>18:36 GTM</span>
          <span> ***</span>
        </div>
        <div className={classes.headerCurrentWeather}>
          <span>12&#176;</span>
        </div>
      </div>
      <Progress />
    </div>
  )
}
