import { gql } from '../../gql'

export const postType = gql`
  type Post {
    id: ID!
    userId: Int
    title: String
    body: String
  }
`
