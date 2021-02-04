import * as Types from '@/types'

export function moduleMethodKeyGet(
  methodKey: Types.ClientMethod
): Types.ClientMethod {
  return <Types.ClientMethod>methodKey.toUpperCase()
}
