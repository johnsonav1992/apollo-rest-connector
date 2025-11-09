import { gql } from '../../gql'

export const productType = gql`
  type Product {
    id: ID!
    name: String
    description: String
    slug: String
    primaryTag: String
  }
`
