import {applyMiddleware, createStore} from 'redux';
// do we need thunk
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

// Reducers
import showReducer from './reducers/show';

const loggerMiddleware = createLogger();
export default createStore(
    showReducer,
    {},
    applyMiddleware(thunkMiddleware, loggerMiddleware),
);