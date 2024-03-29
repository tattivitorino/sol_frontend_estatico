import React from "react";
import ReactDOM from "react-dom";
import { Router, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {createMemoryHistory} from 'history'

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Dashboard from "layouts/Dashboard.jsx";
import AdvCloudAdmin from "layouts/AdvCloudAdmin.jsx";
import AtexAdmin from "layouts/AtexAdmin.jsx";
import AuthLayout from "layouts/Auth.jsx";

const history=createMemoryHistory({initialEntries: ['/']})


ReactDOM.render(
    <Router  history={history}>
        <Switch>
            {<Route path="/dashboard" render={props => <Dashboard {...props} />} />}
            <Route path="/advcloud" render={props => <AdvCloudAdmin {...props} />} />
            <Route path="/atex" render={props => <AtexAdmin {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Redirect from="/" to="/auth/login" />
        </Switch>
    </Router>,
    document.getElementById("root")
);