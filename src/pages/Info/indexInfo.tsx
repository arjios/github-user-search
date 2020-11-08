import React, { useEffect, useState } from 'react';
import LabelInfo from '../../core/components/LabelInfo/indexLabelInfo';
import { UserResponse } from '../../core/types/User';
import Button from '../../core/components/Button/indexButton';
import { makeRequest } from '../../core/utils/request';
import Loader from '../../core/components/Loaders/Loader';

import './stylesInfo.css';

const Info = () => {

    const [userResponse, setUserResponse] = useState<UserResponse>();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/washingtonsoares`})
            .then(response => setUserResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, []);



    return (
        <>
            {isLoading ? <Loader /> : (
                <div className="info-card-container">
                    <div className="info-card-image">
                        <img src={userResponse?.avatar_url} 
                             alt="avatar" 
                             className="info-card-image" />
                    </div>
                    <div className="info-card-container-info">
                        <div className="info-card-info">
                            <div className="info-card-content-rep">
                                <LabelInfo
                                    indexLabelInfoText="Repositórios públicos: "
                                />
                                {userResponse?.public_repos}
                            </div>
                            <div className="info-card-content-list-seg">
                                <LabelInfo
                                    indexLabelInfoText="Seguidores:"
                                />
                                {userResponse?.followers}
                            </div>
                            <div className="info-card-content-list-sig">
                                <LabelInfo
                                    indexLabelInfoText="Seguindo: "
                                />
                                {userResponse?.following}
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
                                {userResponse?.company}
                            </div>
                            <div className="info-card-person">
                                <LabelInfo
                                    indexLabelInfoText="Website/Blog: "
                                />
                                {userResponse?.blog}
                            </div>
                            <div className="info-card-person">
                                <LabelInfo
                                    indexLabelInfoText="Localidade: "
                                />
                                {userResponse?.location}
                            </div>
                            <div className="info-card-person">
                                <LabelInfo
                                    indexLabelInfoText="Membro desde: "
                                />
                                {userResponse?.created_at}
                            </div>
                        </div>
                    </div>
                    <div className="info-card-button">
                        <Button indexButtonText="Ver perfil" />
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Info;