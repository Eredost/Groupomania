import React, { Component } from 'react';

import './Login.scss';
import Header from "../Components/Header";

class Login extends Component {

    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <div className="main">
                    Login
                </div>
            </div>
        );
    }
}

export default Login;
