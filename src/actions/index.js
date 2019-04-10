
const stocksLoaded = (newStocks) => {
    return {
        type: 'STOCKS_LOADED',
        payload: newStocks
    };
};

const stosksRequested = () => {
    return {
        type: 'STOCKS_REQUSTED'
    }
}

const signUp = (newTokens) => {
    return {
        type : 'SIGN_UP',
        payload : newTokens
    }
}

export {
    stocksLoaded,
    stosksRequested,
    signUp
};