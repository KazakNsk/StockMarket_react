import { SIGNUP_FETCH_SUCCESSED, SIGNUP_START,
    INFO_START, INFO_SUCCESSED,
    GET_STOCKS_START, GET_STOCKS_SUCCESSED } from '../constants/actions';


const initialState = {
    loading: false,
    tokens: {
        accessToken: '',
        refreshToken: ''
    },

    isLoggedIn: false,
    info: {
        name:'',
        balance: 0,
        stocks:[]        
    },

    stocks: {
        nextItemId: 0,
        prevItemId: 0,
        items: [
        {
            id: 0,
            code: '',
            name: '',
            iconUrl: "#",
            price: 0,
            priceDelta: 0.3
        }
    ]   
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_FETCH_SUCCESSED:
            return {
                ...state,
                loading: false,
                tokens: action.payload,
                isLoggedIn: true,
            };
        case INFO_START:
            return {
                ...state,
                loading: true
            }
        case INFO_SUCCESSED:
            return {
                ...state,
                loading: false,
                info: action.payload
            }
        case GET_STOCKS_START:
            return {
                ...state,
                loading: true
            }
        case GET_STOCKS_SUCCESSED:
            return {
                ...state,
                loading: false,
                stocks: action.payload
            }
        default :
            return state;
    }
};

export default reducer;
