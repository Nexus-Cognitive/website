import type { AxiosResponse } from 'axios'
import type {
  APIClientMethodKeyT,
  APIClientServiceT,
  IDT,
  StoreActionsMethodT
} from '@/types'
import type {
  StoreActionPayloadI,
  StoreContextI,
  StoreStateAlertI
} from '@/interfaces'
import { storeMutationsKeyGet } from '@/utilities'

export function storeActionMethodGet(
  apiClientService: APIClientServiceT,
  apiClientServiceKey: string,
  apiClientMethodKey: APIClientMethodKeyT,
  storeStateKeys: string[]
): StoreActionsMethodT {
  return (
    { commit }: StoreContextI,
    storeActionPayload: StoreActionPayloadI = {}
  ): Promise<void> => {
    const storeMutationsKeyActing = storeMutationsKeyGet([
      'acting'
    ])

    const storeStateAlert = {} as StoreStateAlertI

    const paths: IDT[] = [
      storeActionPayload.id ? storeActionPayload.id : '',
      ...storeStateKeys.slice(1)
    ]

    commit(storeMutationsKeyActing, true)

    return apiClientService[apiClientServiceKey][apiClientMethodKey](
      paths,
      storeActionPayload.data,
      storeActionPayload.params
    )
      .then((response: AxiosResponse) => {
        if (storeActionPayload.resolve) {
          storeActionPayload.resolve(response)
        } else {
          commit(
            storeMutationsKeyGet(storeStateKeys),
            response.data[storeStateKeys[0]]
          )

          commit(
            storeMutationsKeyGet(['modular_content']),
            response.data.modular_content
          )

          commit(
            storeMutationsKeyGet(['pagination']),
            response.data.pagination
          )
        }
      })
      .then(() => {
        storeStateAlert.message = `Successful ${apiClientMethodKey} of ${apiClientServiceKey}`
        storeStateAlert.success = true
      })
      .catch((error: Error) => {
        storeStateAlert.message = `Error in ${apiClientMethodKey} of ${apiClientServiceKey}: ${error.message}`
        storeStateAlert.success = false
      })
      .finally(() => {
        commit(storeMutationsKeyActing, false)

        if (!storeActionPayload.silent) {
          commit(storeMutationsKeyGet(['alert']), storeStateAlert)
        }
      })
  }
}
