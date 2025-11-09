import { gql } from '../../gql'

export const postsQueries = gql`
  extend type Query {
    # Fetch all posts from JSONPlaceholder API with optional limit
    posts(limit: Int): [Post]
      @connect(
        source: "jsonplaceholder"
        http: { GET: "/posts?_limit={$args.limit}" }
        selection: """
        $ {
          id
          userId
          title
          body
        }
        """
      )

    # Fetch a single post by ID
    post(id: ID!): Post
      @connect(
        source: "jsonplaceholder"
        http: { GET: "/posts/{$args.id}" }
        selection: """
        $ {
          id
          userId
          title
          body
        }
        """
      )
  }
`
