/**
 * This is a workaround
 *
 * openapi-generator typescript was adding 'Set' to tsImports, imports
 * on models that have fields that are arrays with "uniqueItems" set
 */
// @ts-ignore
export { Set };
