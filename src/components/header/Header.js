import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Progress from './Progress'

const useStyles = makeStyles({
  mainTopHeader: {
    order: '1',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    height: '2em'
  },
});
  

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.mainHeader}>
      <div className={classes.mainTopHeader}>
        <div className={classes.headerCity}> 
          <span>London</span>
        </div>
        <div className={classes.headerTime}>
          <span>***</span>
          <span>18:36 GTM</span>
          <span>***</span>
        </div>
        <div className={classes.headerCurrentWeather}>
          <span>12*</span>
        </div>
      </div>
      <Progress />
    </div>
  )
}
