import React, { Component } from 'react';

import './Profile.scss';
import profilePic from './matthew.png';

class Profile extends Component {
    render() {
        return (
            <div className="profile__wrapper">
                <div className="profile">
                    <div className="profile__header">
                        <img src={profilePic} alt="profile picture" className="profile__picture"/>
                        <div>
                            <p className="profile__fullname">Mathieu Nebra</p>
                        </div>
                    </div>
                    <p className="profile__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur arcu enim. Donec erat metus, luctus at leo non, porttitor ultricies orci. Integer sagittis interdum mattis. Proin venenatis condimentum maximus. Sed rutrum dolor vel ipsum commodo rhoncus.
                    </p>
                </div>
            </div>
        )
    }
}

export default Profile;
