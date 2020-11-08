import React from 'react';

type Props = {
    indexLabelInfoText: string;
};


const LabelInfo = ({indexLabelInfoText}: Props) => {
    return (
        <div className="index-label-info">
            {indexLabelInfoText}
        </div>
    )
}

export default LabelInfo;