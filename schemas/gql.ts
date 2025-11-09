/**
 * Simple template tag for GraphQL syntax highlighting in VS Code
 * Just returns the string as-is, but triggers GraphQL syntax highlighting
 */
export function gql(strings: TemplateStringsArray, ...values: any[]): string {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '')
  }, '')
}
