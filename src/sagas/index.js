import { call, put, takeEvery } from 'redux-saga/effects'
import { SIGNUP_START, INFO_START, GET_STOCKS_START } from '../constants/actions';
import signUp from '../api/signup';
import info from '../api/info';
import stocks from '../api/stocks'
import { loginFetchSuccessed, infoSuccessed, stocksSuccessed } from '../actions';

function* fetchUser(action) {
    try {
        const tokens = yield call(signUp, action.payload);

        yield put(loginFetchSuccessed(tokens));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchInfo(action) {
    try {
        const infoData = yield call(info, action.payload);

        yield put(infoSuccessed(infoData));
    } catch (e) {
        yield put({type: "INFO_FETCH_FAILED", message: e.message});
    }
}

function* fetchStocks(action) {
    try {
        const stocksData = yield call(stocks, action.payload);

        yield put(stocksSuccessed(stocksData));
    } catch (e) {
        yield put({type: "sTOCKS_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery(SIGNUP_START, fetchUser);
    yield takeEvery(INFO_START, fetchInfo);
    yield takeEvery(GET_STOCKS_START, fetchStocks);
}

export default mySaga;
