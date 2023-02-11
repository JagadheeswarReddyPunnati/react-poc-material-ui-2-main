import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS_HOOKS
} from './userTypes'

const initialState = {
    loading: false,
    users4hooks: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS_HOOKS:
            return {
                ...state,
                loading: false,
                users4hooks: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer