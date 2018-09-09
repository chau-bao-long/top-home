import { handleActions, combineActions } from "redux-actions"
import _ from "lodash"

export const handleApiActions = ({defaultState, ...reducer}) => {
  const key = _.keys(reducer)[0]
  const arrMap = [
    [
      `LOADING/${key.toUpperCase()}`,
      (state, action) => ({
        ...state,
        isLoading: action.payload,
      })
    ],
    [
      `ERROR/${key.toUpperCase()}`,
      (state, action) => ({
        ...state,
        errorMsg: action.payload,
      })
    ],
    ..._.keys(reducer[key]).map(subkey => [
      subkey,
      reducer[key][subkey]
    ]),
  ]
  const result = {}
  result[key] = handleActions(buildMap(arrMap), {...initialState, ...defaultState})
  return result
}

const initialState = {
  isLoading: false,
  errorMsg: "",
}

function buildMap(arrayMap) {
  const map = new Map(arrayMap)
  return map.hasOwnProperty("_c") ? map._c : map
}
