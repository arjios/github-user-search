import React from 'react';

import LabelInfo from '../../core/components/LabelInfo/indexLabelInfo';
import { User } from '../../core/types/User';
import Button from '../../core/components/Button/indexButton';

import './stylesInfo.css';

type Props = {
    user: User;
}

const Info = ({ user }: Props) => {
    return (
        <div className="info-card-container">
            <div className="info-card-image">
                <img src={user?.avatar_url}
                    alt="avatar"
                    className="info-card-image" />
            </div>
            <div className="info-card-container-info">
                <div className="info-card-info">
                    <div className="info-card-content-rep">
                        <LabelInfo
                            indexLabelInfoText="Repositórios públicos: "
                        />
                        {user?.public_repos}
                    </div>
                    <div className="info-card-content-list-seg">
                        <LabelInfo
                            indexLabelInfoText="Seguidores:"
                        />
                        {user?.followers}
                    </div>
                    <div className="info-card-content-list-sig">
                        <LabelInfo
                            indexLabelInfoText="Seguindo: "
                        />
                        {user?.following}
                    </div>
                </div>
                <div className="info-card-content-info">
                    <form className="info-card-form-info">
                        <label className="label-card-info">
                            Informações
                    </label>
                    </form>
                    <div className="info-card-person">
                        <LabelInfo
                            indexLabelInfoText="Empresa: "
                        />
                        {user?.company}
                    </div>
                    <div className="info-card-person">
                        <LabelInfo
                            indexLabelInfoText="Website/Blog: "
                        />
                        {user?.blog}
                    </div>
                    <div className="info-card-person">
                        <LabelInfo
                            indexLabelInfoText="Localidade:" 
                        />
                        {user?.location}
                    </div>
                    <div className="info-card-person">
                        <LabelInfo 
                            indexLabelInfoText="Membro desde:"
                        />
                        {user?.created_at}
                    </div>
                </div>
            </div>
            <div className="info-card-button">
                <Button indexButtonText="Ver perfil" />
            </div>
        </div>
    );
}

export default Info;