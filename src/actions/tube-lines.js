import * as types from './actionTypes';
import axios from 'axios';

const API_ROOT = 'https://api.tfl.gov.uk/line';

export function fetchLinesSuccess(lines) {
    return { type: types.FETCH_LINES, lines };
}

export function fetchLines() {
    return dispatch => {
        return axios.get(`${API_ROOT}/mode/tube/status`).then(response => {
            dispatch(fetchLinesSuccess(response.data));
        });
    };
}
