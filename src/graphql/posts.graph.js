import { gql } from 'react-apollo'

export const fetchAllPosts = gql`
  query {
    allPosts {
      post
      id
    }
  }
`