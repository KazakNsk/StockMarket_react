import React from 'react';
import {StockmarketServiceConsumer} from '../stockmarket-service-context'

const withStockmarketService = () => (Wrapper) => {
    return (props) => {
        return (
            <StockmarketServiceConsumer>
                {
                   (stockmarketService) => {
                        return (<Wrapper {...props}
                            stockmarketService={stockmarketService}/>);
                   } 
                }
            </StockmarketServiceConsumer>
        );
    }
};

export default withStockmarketService;

// получение методов с api теперь получает квп