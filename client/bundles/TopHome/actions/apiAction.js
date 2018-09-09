import { createActions } from "redux-actions"
import { reducers } from "../reducers/topHomeReducer"
import _ from "lodash"

const _reducers = _.mapKeys(reducers, (value, key) => key.toUpperCase())

export const {
  loading,
  error,
} = createActions({
  LOADING: _.mapValues(_reducers, value => {(isloading: boolean) => isLoading}),
  ERROR: _.mapValues(_reducers, value => {(error: string = "") => error}),
})
