import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../core/components/Button/indexButton';

import './stylesSearch.css';

const Search = () => {
    return (
        <div className="search-form-card">
            <div className="search-form-title">
                Encontre um perfil Github
            </div>
            <div className="search-form-input">
                <input type="text" className="search-form-input-text"/>
            </div>
            <div className="search-form-button">
                <Link to="/Search" className="search-form-button-text">
                    <Button indexButtonText="Encontrar" />
                </Link>
            </div>
        </div>
    )
}

export default Search;
