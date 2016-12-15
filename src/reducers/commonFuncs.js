import {
  ORIGIN,
  REQUEST,
  SUCCESS,
  FAILURE,
  CANCEL
} from '../actions/types';

export const addAsyncState = (state, actionType) => {
	for (let key in actionType) {
		if (typeof actionType[key] === 'object') {
			const asyObj = {}
			console.info('key is ', key)
			console.info(actionType[key])
			const action = actionType[key].ORIGIN
			console.info('action is ', action)
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
	}
}