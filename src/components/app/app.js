import React from 'react';
import './app.css';
import {Route, Switch} from 'react-router-dom'
import ShopHeader from '../shop-header';
import {Auth, HomePage, PurchasePage, SalePage} from '../pages'

const App = () => {   
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={9} total={210}/>
            <Switch>
                <Route 
                    path='/'
                    component ={HomePage}
                    exact/>
                <Route 
                    path='/buy'
                    component ={PurchasePage}
                    />
                <Route 
                    path='/auth'
                    component ={Auth}
                    />
                <Route 
                    path='/sale'
                    component ={SalePage}
                    />
            </Switch>
        </main>
        )
};

export default App; 