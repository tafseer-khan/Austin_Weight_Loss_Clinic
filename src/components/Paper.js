import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: 'fitContent',
      height: 'fitContent'
    },
  },
}));

export default function Paperbox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" />
    </div>
  );
}