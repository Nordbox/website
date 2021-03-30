import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Layout from "../components/Layout/Layout"
import TempHome from "../views/TempHome/TempHome"

const Routes = ({ cildren }) => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" strict component={TempHome} />
      </Switch>
    </Layout>
  </Router>
)

export default Routes
