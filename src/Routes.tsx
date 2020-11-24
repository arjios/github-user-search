import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/indexHome';
import Navbar from './core/components/Navbar/indexNavbar';
import SearchInfo from './core/components/indexSearchInfo';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/SearchInfo" >
                <SearchInfo />
            </Route>
        </Switch>
    </BrowserRouter>
);


export default Routes;