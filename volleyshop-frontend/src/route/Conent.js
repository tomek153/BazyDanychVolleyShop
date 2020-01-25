import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home'
import UnderConstruction from '../components/pageinbuilding';
import Shoes from '../components/shoes';
import Clothes from '../components/clothes';
import Accessories from '../components/accessories';
import Supplements from '../components/supplements';
import AddProduct from '../components/addproduct';

const ContentRoute = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/under-costruction" component={UnderConstruction} />
        <Route path="/shoes" component={Shoes} />
        <Route path="/clothes" component={Clothes} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/supplements" component={Supplements} />
        <Route path="/add-product" component={AddProduct} />
    </Switch>
)

export default ContentRoute;