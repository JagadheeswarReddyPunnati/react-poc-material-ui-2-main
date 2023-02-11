import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import userHooksReducer from "./userHooks/userHooksReducer"
const rootReducer = combineReducers({ 
  user: userReducer,
  useHooks:userHooksReducer
})

export default rootReducer