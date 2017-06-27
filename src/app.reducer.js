import { combineReducers } from 'redux'
import { blogPostReducer } from './blogPost.Reducer'

const reducers = {
  blogPost: blogPostReducer
}

export default combineReducers(reducers)