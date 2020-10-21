
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/indexHome';
import After from './pages/After/indexAfter';
import Before from './pages/Before/indexBefore';
import Navbar from './core/components/Navbar/indexNavbar';

const Routes = () => (
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/Before">
                <Before />
            </Route>
            < Route path="/After">
                <After />
            </Route>
        </Switch>
    </BrowserRouter>
);


export default Routes;