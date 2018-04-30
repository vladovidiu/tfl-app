import { combineReducers } from 'redux';
import lines from './lines';
import line from './line';

const rootReducer = combineReducers({
    lines,
    line,
});

export default rootReducer;
