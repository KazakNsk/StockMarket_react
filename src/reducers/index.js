import { SIGNUP_FETCH_SUCCEEDED, SIGNUP_START } from '../constants/actions';


const initialState = {
    loading: false,
    tokens: {
        accessToken: '',
        refreshToken: ''
    },
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_FETCH_SUCCEEDED:
            return {
                ...state,
                loading: false,
                tokens: action.payload,
                isLoggedIn: true,
            };
        default :
            return state;
    }


};

export default reducer;
