import {
    FETCH_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED
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
        case EDIT_USER_SUCCESS: {
            let users = [...state.users4Saga];
            let findIndex = users.findIndex((user) => user.id === action.payload.id);
            users[findIndex] = action.payload;
            return {
                ...state,
                loading: false,
                users4Saga: users,
                error: ''
            };
        }
        case EDIT_USER_FAILED:
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