import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../components/navigation'

const NavigationRoute = () => (
    <Switch>
        <Route path="/" component={Navigation} />
        <Route path="/under-costruction" component={Navigation} />
    </Switch>
)

export default NavigationRoute;