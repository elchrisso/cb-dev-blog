import { actionTypes } from './blogPost.actions'

const initialState = {
  fullDisplay: false
}

export function blogPostReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_DISPLAY:
      return {
        fullDisplay: true
      }

    default:
      return state
  }
}
