import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

// Components
import Header from '../components/Header';
import Content from '../components/Content';
import Photos from '../components/Photos'

@hot(module)
export default class Instagram extends Component {
    render () {
        return (
        <>
        < Header />
        < Content />
        < Photos />
        </>
        );
    }
}