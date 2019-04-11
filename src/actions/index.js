import { SIGNUP_FETCH_SUCCESSED, SIGNUP_START, 
    INFO_START, INFO_SUCCESSED, GET_STOCKS_START, GET_STOCKS_SUCCESSED } from '../constants/actions';


const loginStart = (user) => ({
    type: SIGNUP_START,
    payload: user,
});

const loginFetchSuccessed = (tokens) => ({
    type: SIGNUP_FETCH_SUCCESSED, 
    payload: tokens 
});

const infoStart = () => ({
    type: INFO_START
});

const infoSuccessed = (info) => ({
    type: INFO_SUCCESSED,
    payload: info
});

const stocksStart = () => ({
    type: GET_STOCKS_START
})

const stocksSuccessed = (stocks) => ({
    type: GET_STOCKS_SUCCESSED,
    payload: stocks
})

export {
    loginStart,
    loginFetchSuccessed,
    infoStart,
    infoSuccessed,
    stocksStart,
    stocksSuccessed
};
