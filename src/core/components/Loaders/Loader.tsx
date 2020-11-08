import React from 'react';
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';

const loader = () => {
    return (
        <div className="styles-loader">
            <ImageLoader />
            <InfoLoader />
        </div>

    
    )
}

export default loader