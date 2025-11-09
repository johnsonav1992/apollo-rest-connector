import { writeFileSync } from 'fs'
import { base } from './base'
import { productType } from './types/product'
import { productsQuery } from './queries/products'

const schema = [base, productType, productsQuery].join('\n\n')

writeFileSync('schema.ecomm.graphql', schema)
console.log('✓ schema.ecomm.graphql built successfully')
