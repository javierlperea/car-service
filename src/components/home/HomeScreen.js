// eslint-disable-next-line no-use-before-define
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Hero } from './Hero'
import { Services } from './Services'
import { PageServices } from './PageServices'

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.background.gradient,
    alignContent: 'center'
  }
}))

export const HomeScreen = () => {
  const classes = useStyles()

  return (
        <div className={classes.container}>
            <Hero />
            <div>
                <Services />
            </div>
            <div>
                <PageServices />
            </div>
        </div>
  )
}
