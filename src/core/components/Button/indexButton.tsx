import React from 'react';

type Props = {
    indexButtonText: string;
}

const indexButton = ({indexButtonText}: Props) => {
    return (
        <div className="index-button">
            {indexButtonText}
        </div>
    )
}

export default indexButton;