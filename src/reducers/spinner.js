import {
  SPINNER_ON,
  SPINNER_OFF,
} from '../actions/types';

import {addAsyncState} from './commonFuncs'

const INITIAL_STATE = {
  isSpinnerOn: false
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPINNER_ON:
      return {
        isSpinnerOn: true
      }
    case SPINNER_OFF:
      return {
        isSpinnerOn: false
      }
  }
  return state
}