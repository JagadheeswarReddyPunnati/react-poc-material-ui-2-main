import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_WATCHER,
  EDIT_USER_WATCHER
} from './userSagasTypes'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const getAllUsersSuccess = users => {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload: users
  }
}

export const getAllUsersFailure = error => {
  return {
    type: GET_ALL_USERS_FAILED,
    payload: error
  }
}

export const getAllUsersRequestWatcher = () => {
  return {
    type: GET_ALL_USERS_WATCHER
  }
}

export const editUserRequestWatcher = (requestBody, id) => {
  return {type: EDIT_USER_WATCHER, requestBody, id};
};
