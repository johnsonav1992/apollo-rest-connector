# Schema Structure

This project uses a modular TypeScript-based approach for organizing GraphQL schemas with Apollo Connectors.

## Directory Structure

```
schemas/
  ecomm/
    base.ts              # @link and @source configuration
    types/
      product.ts         # Product type definition
    queries/
      products.ts        # Products query with @connect
    index.ts             # Builds schema.ecomm.graphql

  jsonplaceholder/
    base.ts              # @link and @source configuration
    types/
      post.ts            # Post type definition
    queries/
      posts.ts           # Posts queries with @connect
    index.ts             # Builds schema.jsonplaceholder.graphql
```

## How It Works

1. **Source files** are organized by domain (types, queries, mutations, etc.)
2. Each `.ts` file exports a template string with GraphQL SDL using the `gql` helper
3. The `gql` helper (in `schemas/gql.ts`) provides GraphQL syntax highlighting in VS Code
4. `index.ts` combines all pieces and writes the final `.graphql` file
5. The generated `.graphql` files are consumed by Rover

### Syntax Highlighting

All schema files use the `gql` template tag for GraphQL syntax highlighting. This is a lightweight helper function that:
- Returns the string as-is (no parsing or transformation)
- Triggers VS Code's GraphQL language support for the template literal
- Works with the GraphQL VS Code extension for IntelliSense and validation

## Build Commands

```bash
# Install dependencies
npm install

# Build all schemas
npm run build:schemas

# Build and start dev server
npm run dev

# Build and compose supergraph
npm run compose
```

## Adding New Endpoints

### Adding to Existing Subgraph

1. Create a new file in the appropriate folder:
   - Types: `schemas/[subgraph]/types/[name].ts`
   - Queries: `schemas/[subgraph]/queries/[name].ts`

2. Export your schema string with the `gql` helper for syntax highlighting:
```typescript
import { gql } from '../../gql'

export const myQuery = gql`
  extend type Query {
    myField: MyType
      @connect(
        source: "subgraph-name"
        http: { GET: "/endpoint" }
        selection: """
        $ {
          field1
          field2
        }
        """
      )
  }
`
```

3. Import and add to `schemas/[subgraph]/index.ts`:
```typescript
import { myQuery } from './queries/myQuery'
const schema = [..., myQuery].join('\\n\\n')
```

### Adding New Subgraph

1. Create new directory: `schemas/[new-subgraph]/`
2. Add `base.ts`, `types/`, `queries/`, and `index.ts`
3. Update `supergraph.yaml` to include the new subgraph
4. Update `package.json` build:schemas script

## Benefits

- ✅ **Modular**: Easy to find and edit specific types/queries
- ✅ **TypeScript**: Syntax highlighting and validation
- ✅ **Version Control**: Better git diffs for schema changes
- ✅ **Organized**: Clean separation by domain and concern
- ✅ **Scalable**: Easy to add new endpoints without bloating single files
