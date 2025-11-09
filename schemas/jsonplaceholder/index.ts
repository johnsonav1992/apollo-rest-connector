import { writeFileSync } from 'fs'
import { base } from './base'
import { postType } from './types/post'
import { postsQueries } from './queries/posts'

const schema = [base, postType, postsQueries].join('\n\n')

writeFileSync('schema.jsonplaceholder.graphql', schema)
console.log('✓ schema.jsonplaceholder.graphql built successfully')
