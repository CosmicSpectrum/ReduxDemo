import {combineReducers} from "redux";
import accountReducer from './accountReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({account: accountReducer, users: usersReducer});

export default reducers;