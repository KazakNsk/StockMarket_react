import { call, put, takeEvery } from 'redux-saga/effects'
import { SIGNUP_START } from '../constants/actions';
import signup from '../api/signup';
import { loginFetchSuccssed } from '../actions';

function* fetchUser(action) {
    try {
        const tokens = yield call(signup, action.payload);

        yield put(loginFetchSuccssed(tokens));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}


function* mySaga() {
    yield takeEvery(SIGNUP_START, fetchUser);
}

export default mySaga;
