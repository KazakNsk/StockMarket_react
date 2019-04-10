import React from 'react';

const {
    Provider : StockmarketServiceProvider,
    Consumer : StockmarketServiceConsumer
} = React.createContext();

export {
    StockmarketServiceProvider,
    StockmarketServiceConsumer
}

//контекст для доступа Api ко всем компонентам