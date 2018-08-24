import { handleActions, combineActions } from "redux-actions"
import { loading, error } from "../actions/apiAction"

export const handleApiActions = (reducerMap, defaultState) => {
  const arrMap = [
    [
      combineActions(...Object.values(loading)),
      (state, action) => ({
        ...state,
        isLoading: action.payload,
      })
    ],
    [
      combineActions(...Object.values(error)),
      (state, action) => ({
        ...state,
        errorMsg: action.payload,
      })
    ],
    ...Object.keys(reducerMap).map(key => [
      key,
      reducerMap[key]
    ]),
  ]
  return handleActions(buildMap(arrMap), {...initialState, ...defaultState})
}

const initialState = {
  isLoading: false,
  errorMsg: "",
}

function buildMap(arrayMap) {
  const map = new Map(arrayMap)
  return map.hasOwnProperty("_c") ? map._c : map
}
