import React, { Component } from 'react';

import './Post.scss';
import './Posts.scss';
import placeholder from './placeholder.jpg';
import profilePic from "./matthew.png";

class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <div className="post">
                    <div className="post__header">
                        <img src={profilePic} alt="profile picture" className="post__profile-picture"/>
                        <div>
                            <p className="post__fullname">Mathieu Nebra</p>
                            <time className="post__creation-date">Il y a 10 minutes</time>
                        </div>
                    </div>
                    <img src={placeholder} alt="post picture" className="post__picture"/>
                    <p className="post__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur arcu enim. Donec erat metus, luctus at leo non, porttitor ultricies orci. Integer sagittis interdum mattis. Proin venenatis condimentum maximus. Sed rutrum dolor vel ipsum commodo rhoncus.
                    </p>
                </div>
                <div className="post">
                    <div className="post__header">
                        <img src={profilePic} alt="profile picture" className="post__profile-picture"/>
                        <div>
                            <p className="post__fullname">Mathieu Nebra</p>
                            <time className="post__creation-date">Il y a 10 minutes</time>
                        </div>
                    </div>
                    <p className="post__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur arcu enim. Donec erat metus, luctus at leo non, porttitor ultricies orci. Integer sagittis interdum mattis. Proin venenatis condimentum maximus. Sed rutrum dolor vel ipsum commodo rhoncus.
                    </p>
                </div>
            </div>

        )
    }
}

export default Posts;
