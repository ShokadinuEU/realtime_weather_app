import React from 'react'
import FiveDays from './FiveDays'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDailyReport: {
    backgroundColor: '#363636',
    color: '#fff',
    display: 'flex',
  },
});

export default function Index() {
  const classes = useStyles();
    return (
      <div className={classes.historyMain}>
        <FiveDays />
      </div>
    )
}
