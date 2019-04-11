import { SIGNUP_FETCH_SUCCEEDED, SIGNUP_START } from '../constants/actions';

const loginStart = user => ({
    type: SIGNUP_START,
    payload: user,
});

const loginFetchSuccssed = (tokens) => ({
    type: SIGNUP_FETCH_SUCCEEDED, 
    payload: tokens 
});

export {
    loginStart,
    loginFetchSuccssed
};
