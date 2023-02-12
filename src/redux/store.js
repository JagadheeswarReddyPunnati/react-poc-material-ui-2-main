import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'
import {watchUser} from './userSagas/user.sagas'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk,sagaMiddleware))
)
sagaMiddleware.run(watchUser);

export default store