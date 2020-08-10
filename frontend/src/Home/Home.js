import React, { Component } from 'react';

import './Home.scss';
import Header from "../Components/Header";

class Home extends Component {

    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                Home
            </div>
        );
    }
}

export default Home;
