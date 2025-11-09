import { gql } from '../gql'

export const base = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.11"
    )
    @link(
      url: "https://specs.apollo.dev/connect/v0.2"
      import: ["@connect", "@source"]
    )

  @source(
    name: "ecomm"
    http: {
      baseURL: "https://ecommerce.demo-api.apollo.dev/"
      headers: [
        # Map X-Ecomm-Token from client to Authorization header for ecomm API
        { name: "Authorization", from: "x-ecomm-token" }
      ]
    }
  )
`
