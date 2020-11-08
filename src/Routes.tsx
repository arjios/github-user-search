import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/indexHome';
import Navbar from './core/components/Navbar/indexNavbar';
import Info from './pages/Info/indexInfo';
import SearchRoutes from './pages/SearchRoutes';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/SearchRoutes">
                <SearchRoutes />
            </Route>
            <Route path="/Info">
                <Info />
            </Route>
        </Switch>
    </BrowserRouter>
);


export default Routes;