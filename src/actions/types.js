const ASYNC = 'ASYNC';
export const ORIGIN = 'ORIGIN';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const CANCEL = 'CANCEL';
const keyMirror = (obj) => {
  const ret = {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === ASYNC) {
        ret[key] = {}
        ret[key][ORIGIN] = `${key}_${ORIGIN}`
        ret[key][REQUEST] = `${key}_${REQUEST}`
        ret[key][SUCCESS] = `${key}_${SUCCESS}`
        ret[key][FAILURE] = `${key}_${FAILURE}`
        ret[key][CANCEL] = `${key}_${CANCEL}`

      } else {
        ret[key] = key
      }
    }
  }
  console.log(ret)
  return ret

}

export const CHANGE_AUTH = 'change_auth';
export const DATA = keyMirror({
  GET_DATA: ASYNC
})
