import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from './Login/Login';
import Register from "./Register/Register";
import Home from "./Home/Home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
