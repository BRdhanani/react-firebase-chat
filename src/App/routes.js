import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history, routes } from './../config/routes'

const Routes = (props) => {
  return (
    <Router history={history}>
      <Switch>
        {Object.keys(routes).map((route) => (
          <Route exact={true} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  )
}

export default Routes
