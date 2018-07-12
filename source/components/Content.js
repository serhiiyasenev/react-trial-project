// Core
import React, {Component} from 'react';

// Components
import Profile from './Profile'
export default class Content extends Component {
    render () {
        return (
            <div className = 'content' >
                < Profile />
            </div>
        );
    }
}