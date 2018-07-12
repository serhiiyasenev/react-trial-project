// Core
import React, { Component } from 'react';

// Instruments 
import * as photosMap from '../theme/assets/images/photos';
import photosData from '../theme/assets/images/photos/data';

// Components 
import Photo from './Photo';

export default class Photos extends Component {
    render () {
        const photosJSX = photosData.map((photo) => (
            <Photo
                    key = { photo.id }
                    secured = { photo.secured }
                    src = { photosMap[photo.name] }
            />
        ));
        return (
                <div className = 'photos'>
                    <div className = 'layout'>
                        { photosJSX }
                    </div>
                </div>
        );
    }
}