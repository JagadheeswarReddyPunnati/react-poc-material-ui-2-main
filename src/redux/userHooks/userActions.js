import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS_HOOKS
} from './userTypes'

const GET_USERS_API = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers4Hooks = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get(GET_USERS_API)
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess4Hooks(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess4Hooks = users => {
  return {
    type: FETCH_USERS_SUCCESS_HOOKS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}