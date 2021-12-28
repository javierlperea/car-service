// eslint-disable-next-line no-use-before-define
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '100%',
    padding: '2px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: theme.background.gradient
  },
  homeButton: {
    display: 'flex',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      color: '#BEC7C7'
    }
  },
  content: {
    display: 'flex',
    padding: '0 10px'
  }
}))

export const Navbar = () => {
  const classes = useStyles()

  return (
        <nav className="navbar-dark bg-dark d-flex flex-wrap">
            <div className={classes.container}>
                <div>
                    <Link
                        className={classes.homeButton}
                        to="/"
                    >
                        Cars Services
                    </Link>
                </div>
                <div className={classes.content}>
                    <div className="navbar-nav flex-row">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link p-2"
                            exact
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link p-2"
                            exact
                            to="/clients"
                        >
                            Clients
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link p-2"
                            exact
                            to="/newClient"
                        >
                            New Client
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
  )
}
