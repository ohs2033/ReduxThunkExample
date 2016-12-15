import {get} from '../utils/api.js'
import {CHANGE_AUTH, DATA, ORIGIN, REQUEST, SUCCESS, FAILURE, CANCEL, SPINNER_ON, SPINNER_OFF} from './types';

const dispatchAsyncAction = async (dispatch, getState =() => {return {} }, actionType, url, headers = {}, request = {}) => {
	/*
	action Creator가 실행된 이후, reducer에 dispatch 가 되기 이전까지의 순간.
	 */
	dispatch({
		type: DATA.GET_DATA[REQUEST] //'GET_DATA_REQUEST'
	})
	dispatch({
		type: SPINNER_ON
	})
	const response = await get('/data')
	const json = await response.json()
	if (response.ok) {
		dispatch({
			type: DATA.GET_DATA[SUCCESS],
			payload: json //'GET_DATA_SUCCESS'
		})
		dispatch({
			type: SPINNER_OFF
		})
	}
}

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}

export function getDefaultData() {
	return (dispatch: Function, getState: Function) => {
		dispatchAsyncAction(dispatch, getState, DATA.GET_DATA)	
	}
}

