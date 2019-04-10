import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import StockmarketService from './services/stock-market-service';
import {StockmarketServiceProvider} from './components/stockmarket-service-context';

import store from './store';

import App from './components/app';

const stockmarketService = new StockmarketService();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <StockmarketServiceProvider value={stockmarketService}>
                <Router>
                    <App/>
                </Router>
            </StockmarketServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));