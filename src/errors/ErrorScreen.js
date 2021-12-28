// eslint-disable-next-line no-use-before-define
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: 'url(../assets/404-not-found.jpg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    height: '22rem'
  }
}))

export const ErrorScreen = (statusText) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p>{statusText}</p>
    </div>
  )
}
