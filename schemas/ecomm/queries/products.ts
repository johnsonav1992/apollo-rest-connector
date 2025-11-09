import { gql } from '../../gql'

export const productsQuery = gql`
  extend type Query {
    products: [Product]
      @connect(
        source: "ecomm"
        http: { GET: "/products" }
        selection: """
        $.products {
          id
          name
          description
          slug
          primaryTag: tags->first.name
        }
        """
      )
  }
`
