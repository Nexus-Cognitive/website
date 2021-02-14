export function valueIsObject(value: any): boolean {
  return value instanceof Object && !Array.isArray(value)
}
