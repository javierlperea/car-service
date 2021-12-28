// eslint-disable-next-line no-use-before-define
import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative'
  },
  bottom: {
    color: '#FEEFEB'
  },
  top: {
    color: theme.background.primary.main,
    position: 'absolute',
    left: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}))

export const Loader = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={80}
        thickness={5}
        {...props}
        value={100}
    />
    <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle
        }}
        size={80}
        thickness={5}
        {...props}
    />
    </div>
  )
}
