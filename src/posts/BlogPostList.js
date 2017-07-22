import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import BlogEntryPreview from './BlogEntryPreview'
import { fetchAllPosts } from '../graphql/posts.graph'



class BlogPostList extends Component {

  render () {

    let posts = null
    if (this.props.data.allPosts) {
      posts = this.props.data.allPosts//.map((post) => {
        return (
          <BlogEntryPreview blogEntryList={posts}/>
        )
      //})
    }

    return (
      <h1>
        {posts}
      </h1>
    )
  }
}

const withPostQuery = graphql(fetchAllPosts, {options: {
  fetchPolicy: 'network-only' }})(BlogPostList)

export default withPostQuery