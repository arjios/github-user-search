import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Search from './Search/indexSearch';
import Info from './Info/indexInfo';

const SearchRoutes = () => (
    <BrowserRouter>
    <Search />
        <Switch>
            <Route path="/Info">
                <Info />
            </Route>
        </Switch>
    </BrowserRouter>
);


export default SearchRoutes;