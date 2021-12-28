// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    maxWidth: 330,
    width: '100%',
    background: theme.background.secondary.main,
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    borderRadius: '8px',
    letterSpacing: '-0.5px',
    transition: 'all 0.2s ease-in-out',
    margin: '12px auto',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      transform: 'scale(1.02)'
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: 280
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 250
    }
  },
  title: {
    fontSize: 22,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    lineHeight: '16px',
    marginBottom: 28,
    marginTop: 24,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      height: 60
    },
    [theme.breakpoints.up('lg')]: {
      height: 100
    }
  },
  buttonInfo: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    background: theme.background.primary.main,
    height: 26,
    minWidth: 120,
    marginBottom: 10,
    borderRadius: '5px',
    fontSize: '14px',
    padding: '6px 12px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: theme.background.primary.light,
      color: theme.palette.primary.dark
    }
  }
}))

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ service, description }) => {
  const classes = useStyles()

  const onClick = () => {
    console.log('click')
  }

  return (
        <div className={classes.root}>
            <div className={classes.title}>
                {service}
            </div>

            <Typography className={classes.description}>
                {description}
            </Typography>

            <Button className={classes.buttonInfo} onClick={onClick} endIcon={<ArrowForwardIcon />}>
                Abrir
            </Button>
        </div>
  )
}
