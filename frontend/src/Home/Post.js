import React, { Component } from 'react';
import axios from 'axios';

import './Post.scss';
import profilePic from "./matthew.png";

class Post extends Component {

    handlePostDelete = (event) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; token=`);
        const token = parts.pop().split(';').shift();

        axios.delete('http://localhost:3000/api/posts/' + this.props.post.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(() => {
                this.props.deletePost(this.props.post.id);
            })
            .catch((err) => {
                // TODO
                console.log(err);
            })
    }

    render() {
        return (
            <div className="post">
                <div className="post__header">
                    <img src={profilePic} alt={this.props.post.User.username} className="post__profile-picture"/>
                    <div>
                        <p className="post__fullname">{this.props.post.User.username}</p>
                        <time className="post__creation-date" dateTime={new Date(this.props.post.createdAt).toISOString()}>{new Date(this.props.post.createdAt).toLocaleDateString()}</time>
                    </div>
                </div>
                { this.props.post.image ? <img src={this.props.post.image} alt="" className="post__picture"/> : '' }
                <p className="post__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur arcu enim. Donec erat metus, luctus at leo non, porttitor ultricies orci. Integer sagittis interdum mattis. Proin venenatis condimentum maximus. Sed rutrum dolor vel ipsum commodo rhoncus.
                </p>
                { this.props.user.roles && this.props.user.roles.includes('ROLE_MODERATOR') ?
                    <button href="#" onClick={this.handlePostDelete} className="post__delete">Supprimer ce post</button> : ''
                }
            </div>
        )
    }
}

export default Post;
