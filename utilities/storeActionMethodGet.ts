import type { AxiosResponse } from 'axios'
import type {
  APIClientInstanceMethodKeyT,
  APIClientServiceT,
  IDT,
  StoreActionMethodT
} from '@/types'
import type {
  StoreActionPayloadI,
  StoreContextI,
  StoreStateAlertI
} from '@/interfaces'
import { storeMutationInstanceKeyGet } from '@/utilities'

export function storeActionMethodGet(
  apiClientService: APIClientServiceT,
  apiClientServiceKey: string,
  apiClientInstanceMethodKey: APIClientInstanceMethodKeyT,
  storeStateInstanceKeys: string[]
): StoreActionMethodT {
  return (
    { commit }: StoreContextI,
    storeActionPayload: StoreActionPayloadI = {}
  ): Promise<void> => {
    const storeMutationInstanceKeyActing = storeMutationInstanceKeyGet([
      'acting'
    ])

    const storeStateAlert = {} as StoreStateAlertI

    const paths: IDT[] = [
      storeActionPayload.id ? storeActionPayload.id : '',
      ...storeStateInstanceKeys.slice(1)
    ]

    commit(storeMutationInstanceKeyActing, true)

    return apiClientService[apiClientServiceKey][apiClientInstanceMethodKey](
      paths,
      storeActionPayload.data,
      storeActionPayload.params
    )
      .then((response: AxiosResponse) => {
        if (storeActionPayload.resolve) {
          storeActionPayload.resolve(response)
        } else {
          commit(
            storeMutationInstanceKeyGet(storeStateInstanceKeys),
            response.data
          )
        }
      })
      .then(() => {
        storeStateAlert.message = `Successful ${apiClientInstanceMethodKey} of ${apiClientServiceKey}`
        storeStateAlert.success = true
      })
      .catch((error: Error) => {
        storeStateAlert.message = `Error in ${apiClientInstanceMethodKey} of ${apiClientServiceKey}: ${error.message}`
        storeStateAlert.success = false
      })
      .finally(() => {
        commit(storeMutationInstanceKeyActing, false)

        if (!storeActionPayload.silent) {
          commit(storeMutationInstanceKeyGet(['alert']), storeStateAlert)
        }
      })
  }
}
