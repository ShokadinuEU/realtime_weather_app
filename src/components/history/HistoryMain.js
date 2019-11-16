import React from 'react'
import HistoryByDay from './HistoryByDay'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDailyReport: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    display: 'flex',
  },
});

export default function HistoryMain() {
  const classes = useStyles();
    return (
      <div className={classes.historyMain}>
        <HistoryByDay />
        <HistoryByDay />
        <HistoryByDay />
        <HistoryByDay />
        <HistoryByDay />
      </div>
    )
}
