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
    name: "jsonplaceholder"
    http: {
      baseURL: "https://jsonplaceholder.typicode.com"
      headers: [
        # Map X-JSONPlaceholder-Token from client to Authorization header for jsonplaceholder API
        { name: "Authorization", from: "x-jsonplaceholder-token" }
      ]
    }
  )
`
