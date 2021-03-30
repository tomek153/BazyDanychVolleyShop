import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home'
import UnderConstruction from '../components/pageinbuilding';
import Shoes from '../components/shoes/shoes';
import Clothes from '../components/clothes/clothes';
import Accessories from '../components/accessories/accessories';
import Supplements from '../components/supplements/supplements';
import AddProduct from '../components/addProducts/addproduct';

const ContentRoute = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/under-costruction" component={UnderConstruction} />
        
        <Route exact path="/obuwie"><Shoes filter="all"/></Route>
        <Route exact path="/obuwie-meskie"><Shoes filter="mens"/></Route>
        <Route exact path="/obuwie-damskie"><Shoes filter="womens"/></Route>
        <Route exact path="/obuwie-junior"><Shoes filter="junior"/></Route>

        <Route exact path="/odziez"><Clothes filter="all"/></Route>
        <Route exact path="/odziez-meska"><Clothes filter="mens"/></Route>
        <Route exact path="/odziez-damska"><Clothes filter="womens"/></Route>

        <Route path="/akcesoria"><Accessories filter="all"/></Route>
        <Route path="/akcesoria-pilki"><Accessories filter="balls"/></Route>
        <Route path="/akcesoria-plecaki-i-torby"><Accessories filter="bags"/></Route>
        <Route path="/akcesoria-nakolanniki"><Accessories filter="knee-pads"/></Route>
        <Route path="/akcesoria-rekawki-siatkarskie"><Accessories filter="sleeves"/></Route>
        <Route path="/akcesoria-skarpetki"><Accessories filter="socks"/></Route>
        <Route path="/akcesoria-sprzet-do-cwiczen"><Accessories filter="workout"/></Route>
        <Route path="/akcesoria-inne"><Accessories filter="other"/></Route>


        <Route path="/supplements" component={Supplements} />
        <Route path="/add-product" component={AddProduct} />
    </Switch>
)

export default ContentRoute;