import {
  DATA,
  ORIGIN,
  REQUEST,
  SUCCESS,
  FAILURE,
  CANCEL
} from '../actions/types';

import {addAsyncState} from './commonFuncs'

const INITIAL_STATE = {
  resource: 0
}
export default (state = addAsyncState(INITIAL_STATE, DATA), action) => {
  switch (action.type) {
    case DATA.GET_DATA[REQUEST]:
      return state;
    case DATA.GET_DATA[SUCCESS]:
      return state;
    case DATA.GET_DATA[FAILURE]:  
      return state;
  }
  return state
}