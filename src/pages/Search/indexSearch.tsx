import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../core/components/Button/indexButton';

import './stylesSearch.css';

type Props = {
    onSearch: (search: string) => void;
}

function Search({ onSearch }: Props) {

    const [search, setSearch] = useState('');
    console.log("indexSearch");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("handleSubmit");
        onSearch(search);
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
       <form onSubmit={handleSubmit} className="search-card-container">
            <div className="search-card-title">
                Encontre um perfil Github
            </div>
            <input
                type="text"
                className="search-card-input search-card-input-text"
                placeholder="Nome do Usuario"
                onChange={handleOnChange}
            />
            <div className="search-card-button">
                <Link to="/Info" className="home-button-text">
                    <Button indexButtonText="Encontrar" />
                </Link>
            </div>
        </form>
    )
}
export default Search;