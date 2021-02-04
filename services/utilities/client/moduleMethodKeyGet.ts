import * as Types from '@/types'

export function moduleMethodKeyGet(
  methodKey: Types.Client.Method
): Types.Client.Method {
  return <Types.Client.Method>methodKey.toUpperCase()
}
