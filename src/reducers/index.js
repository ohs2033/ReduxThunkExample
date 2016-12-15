import {combineReducers} from 'redux';
import authenticationReducer from './authentication';
import dataReducer from './data';
import spinnerReducer from './spinner'

const rootReducer = combineReducers({
    authenticated: authenticationReducer,
    data: dataReducer,
    spinner: spinnerReducer
});

export default rootReducer;
