import {
    CHANGE_AUTH
} from './types';

import {
	get
} from '../utils/api.js'

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}

export function getData() {
	get('/data')
}

