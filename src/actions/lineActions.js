import axios from 'axios';

const API_ROOT = 'https://api.tfl.gov.uk';

export function getLineDetails(id) {
    return axios.get(`${API_ROOT}/line/${id}/route/sequence/outbound`);
}

export function getArrivals(id) {
    return axios.get(`${API_ROOT}/StopPoint/${id}/arrivals`);
}
