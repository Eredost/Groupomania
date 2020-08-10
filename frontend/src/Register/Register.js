import React, { Component } from 'react';

import './Register.scss';
import Header from "../Components/Header";

class Register extends Component {

    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <div className="main">
                    Register
                </div>
            </div>
        );
    }
}

export default Register;
