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
    backgroundColor: '#1a1a1a',
    color: '#fff',
    marginBottom: '1.5em',
    '& p': {
      backgroundColor: '#1a1a1a',
      paddingBottom: '0.1em'
    }
  },
  progressHeader: {
    height: '10px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
  }
}));

export default function LinearDeterminate() {
  const classes = useStyles();
  const progressValue = 27
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
