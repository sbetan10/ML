import * as actionTypes from './actionTypes'

const DEFAULT_STATE = { categories: [], textFilter: null }
export const categoriesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORIES:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
