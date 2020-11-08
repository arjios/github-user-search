
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../core/components/Button/indexButton';

import './stylesHome.css';

const Home = () => {
    return (
        <div className="home-main">
            <div className="home-title">
                Desafio do Capítulo 3,
                <br />Bootcamp DevSuperior
            </div>
            <div className="home-subtitle">            
                <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <br />
                <p>Favor observar as instruções passadas no capítulo sobre a elaboração
                deste projeto.</p><br />
                <p>Este design foi adaptado a partir de Ant Design System for Figma, de
                Mateusz Wierzbicki: antforfigma@gmail.com</p><br />
            </div>
            <div className="home-button">
                <Link to="/SearchRoutes" className="home-button-text">
                    <Button indexButtonText="Começar" />
                </Link>
            </div>
        </div>
    )
}


export default Home;
