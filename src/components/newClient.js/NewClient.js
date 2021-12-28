// eslint-disable-next-line no-use-before-define
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Form } from '../form/Form'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    background: '#E8E8E8',
    fontFamily: theme.typography.fontFamily,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
}))
export const NewClient = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
        <Form />
    </div>
  )
}
