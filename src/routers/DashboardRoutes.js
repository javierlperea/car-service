// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { Clients } from '../clients/Clients'
import { NewClient } from '../components/newClient.js/NewClient'

export const DashboardRoutes = () => {
  return (
        <>

            <div>
                <Switch>
                    <Route exact path="/home" component={HomeScreen} />
                    <Route exact path="/clients" component={Clients} />
                    <Route exact path="/newClient" component={NewClient} />

                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
  )
}
