import * as types from './actionTypes';
import axios from 'axios';

const API_ROOT = 'https://api.tfl.gov.uk/line';

export function getLineDetails(id) {
    return axios.get(`${API_ROOT}/${id}/route/sequence/outbound`);
}
