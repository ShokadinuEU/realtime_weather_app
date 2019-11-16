import React from 'react'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#fcba03',
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  rootHeader: {
    width: '100%',
    height: '10px',
    order: '3',
    backgroundColor: '#38373b',
    color: '#fff',
    marginBottom: '0.2em',
    padding: '10px',
    display: 'inline-table',
    '& p': {
      backgroundColor: '#363636',
      paddingBottom: '0.8em',
      paddingLeft: '1em',
      fontSize: '0.5em',
    }
  },
  progressHeader: {
    height: '15px',
    backgroundColor: '#38373b',
    color: '#fff',
    borderRadius: '7px',
    width: '100%',
    border: '1px solid black'
  }
}));

export default function LinearDeterminate() {
  const classes = useStyles();
  const progressValue = 57
  return (
    <div className={classes.rootHeader}>
      <p>Reloading in <span>{progressValue}</span>s</p>
      <BorderLinearProgress
        className={classes.progressHeader}
        variant="determinate"
        color="primary"
        value={progressValue}
      />
    </div>
  );
}
