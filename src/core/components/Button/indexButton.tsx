import React from 'react';

type Props = {
    indexButtonText: string;
}

const indexButton = ({indexButtonText}: Props) => {
    return (
        <div className="button-text">
            {indexButtonText}
        </div>
    )
}

export default indexButton;