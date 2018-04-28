import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default (state = initialState.lines, action) => {
    switch (action.type) {
        case types.FETCH_LINES: {
            return action.lines;
        }
        default:
            return state;
    }
};
