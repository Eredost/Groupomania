import React, { Component } from 'react';

import './Comment.scss';

class Comment extends Component {
    render() {
        return (
            <div>
                <p>{this.props.comment.message}</p>
            </div>
        )
    }
}

export default Comment;
