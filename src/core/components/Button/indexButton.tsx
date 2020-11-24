import React from 'react';

type Props = {
    indexButtonText: string;
}

const indexButton = ({indexButtonText}: Props) => {
    return (
        <button className="index-button">
            { indexButtonText }
        </button>
    )
}

export default indexButton;