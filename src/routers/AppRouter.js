// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Clients } from '../clients/Clients'
import { Navbar } from '../components/ui/Navbar'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
        <Router>
            <div>
            <Navbar />
                <Switch>
                    <Route exact path="/clients" component={Clients} />
                    <Route path="/" component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
  )
}
