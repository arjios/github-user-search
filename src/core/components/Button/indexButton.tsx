import React from 'react';
import "./stylesButton.css";

type Props = {
    indexButtonText: string;
}

const indexButton = ({indexButtonText}: Props) => {
    return (
        <button className="index-button-text">
            { indexButtonText }
        </button>
    )
}

export default indexButton;