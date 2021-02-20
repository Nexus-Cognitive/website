export function objectSet(object: { [index: string]: any }, keys: string[], value: any): any {
  if (keys.length > 1) {
    object[keys[0]] = objectSet(object[keys[0]], keys.slice(1), value)
  } else {
    object[keys[0]] = value
  }

  return object
}
