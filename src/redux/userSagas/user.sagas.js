import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED,
    GET_ALL_USERS_WATCHER,
    EDIT_USER_WATCHER
} from './userSagasTypes'


function* getAllUsers() {
    try {
        yield put({ type: FETCH_USERS_REQUEST });
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({ type: GET_ALL_USERS_SUCCESS, payload: users.data });
    } catch (error) {
        yield put({ type: GET_ALL_USERS_FAILED, payload: error.message });
    }
}
function* editUser({ requestBody, id }) {
    try {
        yield put({ type: FETCH_USERS_REQUEST });
        let users = yield call(axios.put, 'https://jsonplaceholder.typicode.com/users/' + id, requestBody);
        yield put({ type: 'EDIT_USER_SUCCESS', payload: users.data });
    } catch (error) {
        yield put({ type: 'EDIT_USER_FAILED', payload: error.message });
    }
}

export function* watchUser() {
    yield all([

        takeLatest(GET_ALL_USERS_WATCHER, getAllUsers),
        takeLatest(EDIT_USER_WATCHER, editUser),

    ]);
}