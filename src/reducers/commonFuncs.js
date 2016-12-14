import {
  ORIGIN,
  REQUEST,
  SUCCESS,
  FAILURE,
  CANCEL
} from '../actions/types';

export const addAsyncState = (state, actionType) => {
	const asyObj = {}
	const action = actionType[ORIGIN]
	asyObj[action] = {
		isFetching: false
	}
	console.log({
		...state,
		...asyObj
	})

	return {
		...state,
		...asyObj
	}
}