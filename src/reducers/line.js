import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default (state = initialState.selectedLine, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
