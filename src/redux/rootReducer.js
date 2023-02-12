import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import userHooksReducer from "./userHooks/userHooksReducer"
import userSagasReducer from './userSagas/userSagasReducer'
const rootReducer = combineReducers({ 
  user: userReducer,
  userHooks:userHooksReducer,
  userSagas:userSagasReducer
})

export default rootReducer