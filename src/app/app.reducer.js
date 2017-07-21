import { combineReducers } from 'redux'
import { blogPostReducer } from '../posts/blogPost.Reducer'
import client from '../client'

export default combineReducers({
  apollo: client.reducer(),
  blogPost: blogPostReducer
})