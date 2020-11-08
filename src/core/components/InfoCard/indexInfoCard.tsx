import React from 'react';

const InfoCard = () => {
    return (
        <div className="info-container">
            <ul>
                <li className="infocard-title">
                    Informações
                </li>
            </ul>
            <ul>
                <li className="infocard-title">
                    Empresa:
                </li>
            </ul>
            <div className="infocard-content">
                <span className="infocard-content-text">
                    Empresa:
                </span>
            </div>
            <div className="infocard-content">
                <span className="infocard-content-text">
                    WebSite/Blog:
                </span>
            </div>
            <div className="infocard-content">
                <span className="infocard-content-text">
                    Localidade:
                </span>

            </div>
            <div className="infocard-content">
                <span className="infocard-content-text">
                    Membro desde:
                </span>
            </div>
        </div>
    )
}

export default InfoCard;