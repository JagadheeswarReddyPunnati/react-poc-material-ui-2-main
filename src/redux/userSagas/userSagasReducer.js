import {
    FETCH_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED
} from './userSagasTypes'

const initialState = {
    loading: false,
    users4Saga: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users4Saga: action.payload,
                error: ''
            }
        case GET_ALL_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users4Saga: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer