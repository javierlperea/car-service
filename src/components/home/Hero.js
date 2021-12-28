// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'

const useStyles = makeStyles((theme) => ({
  content: {
    margin: '0 auto',
    height: '100%'
  },
  hero: {
    backgroundImage: 'url(../assets/car.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    height: '22rem'
  },
  contentHero: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '10rem 0',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '44px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '44px'
    }
  },
  subtitle: {
    fontSize: '10px',
    color: theme.palette.warning.main,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
  button: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    background: theme.background.primary.main,
    height: 26,
    minWidth: 90,
    borderRadius: '10px',
    fontSize: '14px',
    padding: '6px 12px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: theme.background.primary.light,
      color: theme.palette.primary.dark
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      padding: '6px 20px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    }
  }
}))

export const Hero = () => {
  const classes = useStyles()

  return (
        <div className={classes.content}>
            <div className={classes.hero}>
                <div className={classes.contentHero}>
                    <span className={classes.subtitle}>The best car service in Argentina</span>
                    <h1 className={classes.title}>Car Service for all vehicles</h1>
                    <Button startIcon={<SearchOutlinedIcon />} className={classes.button}>Show Service Room</Button>
                </div>
            </div>
        </div>
  )
}
