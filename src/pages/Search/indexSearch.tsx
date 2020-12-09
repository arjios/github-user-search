import React, { useState } from 'react';

import Button from '../../core/components/Button/indexButton';

import './stylesSearch.css';

type Props = {
    onSearch: (search: string) => void;
}

const Search = ({ onSearch }: Props) => {

    const [search, setSearch] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                <Button indexButtonText="Encontrar"/>
            </div>
        </form>
    )
}
export default Search;