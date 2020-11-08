import React from 'react';

import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';

const Profile = () => {
    return (
        <div className="profile-form">
            <ImageLoader />
            <InfoLoader />
            <div className="profile-form-img">

            </div>
            <div className="profile-form-info">

            </div>
        </div>
    )
}

export default Profile