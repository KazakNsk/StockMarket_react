

const initialState = {
    stocks: [],
    loading: true,
    tokens: {
        accessToken:'',
        refreshToken:''
    },
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {

    console.log(action.type);

    switch(action.type) {
        case 'STOCKS_LOADED' :
            return {
                ...state,
                stocks : action.payload,
                loading : false
            };
        case 'STOCKS_REQUSTED' :
            return {
                ...state,
                stocks: [],
                loading: true
            };
        case 'SIGN_UP' :
            return {
                ...state,
                tokens : action.payload,
                isLoggedIn: true
            }
        case 'STOCKS_ERROR' :
            return {

            }
        default :
            return state;
    }

        
      
};

export default reducer;