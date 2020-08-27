import React, { Component } from 'react';

import './Home.scss';
import Header from '../Components/Header';
import AsideNav from './AsideNav';
import Profile from './Profile';
import Post from './Post';

class Home extends Component {

    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <div className="home-main">
                    <AsideNav/>
                    <Profile/>
                    <Post/>
                </div>
            </div>
        );
    }
}

export default Home;
