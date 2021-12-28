/* eslint-disable no-use-before-define */
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.background.secondary.light,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem'
  },
  content: {
    background: theme.background.secondary.main,
    padding: 20,
    borderRadius: 10,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      margin: '0 2rem'
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 6rem'
    }

  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    textTransform: 'uppercase',
    fontSize: '20px',
    textAlign: 'center',
    paddingTop: '1rem',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px'
    }
  },
  subtitle: {
    fontSize: '16px',
    color: theme.palette.warning.main,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px'
    }
  },
  description: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    background: theme.background.primary.main,
    borderRadius: '5px',
    fontSize: '14px',
    padding: '6px',
    margin: '1rem ',
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    }
  }
}))

export const PageServices = () => {
  const classes = useStyles()

  return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h2 className={classes.title}>Why perform a mechanical overhaul?</h2>
                <p className={classes.description}>The Mechanical Review guarantees that the engine components and the devices of the different safety systems are in good condition. Vehicle maintenance is an obligation for their safe use. Especially in the case of used vehicles, the vehicle owner must perform regular maintenance.</p>
                <p className={classes.subtitle}>Avoiding very high risk and consequences that may end up being very expensive</p>
            </div>
        </div>
  )
}
