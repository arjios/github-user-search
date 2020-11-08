import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../core/components/Button/indexButton';

import './stylesSearch.css';

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

type ParamsType = {
    userLogin: string;
}

const Search = () => {

    const { userLogin } = useParams<ParamsType>();

    const handleOnChange = (event: FormEvent) => {
        const userLogin = event.target.value;
        console.log(userLogin);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userLogin);
    }

    return (
            <div className="search-card-container">
                <div className="search-card-title">
                    Encontre um perfil Github
                    </div>
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        value={userLogin}
                        type="text"
                        className="search-card-input search-card-input-text"
                        onChange={handleOnChange}
                        placeholder="Nome do Usuario"
                    />
                    <div className="search-card-button">
                        <Link to="/Info" className="home-button-text">
                            <Button indexButtonText="Encontrar" />
                        </Link>
                    </div>
                </form>
            </div>
    )

}
export default Search;