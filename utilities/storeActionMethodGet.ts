import { AxiosResponse } from 'axios'
import type {
  APIClientMethodKeyT,
  APIClientServiceT,
  IDT,
  StoreActionMethodT
} from '@/types'
import type { StoreActionPayloadI, StoreContextI } from '@/interfaces'
import { storeMutationInstanceKeyGet } from '@/utilities'

export function storeActionMethodGet(
  apiClientService: APIClientServiceT,
  apiClientServiceKey: string,
  apiClientMethodKey: APIClientMethodKeyT,
  stateInstanceKeys: string[]
): StoreActionMethodT {
  return (
    { commit }: StoreContextI,
    storeActionPayload: StoreActionPayloadI = {}
  ): Promise<void> => {
    const storeMutationMethodKeyActing = storeMutationInstanceKeyGet(['acting'])

    const paths: IDT[] = storeActionPayload.id
      ? [
          stateInstanceKeys[0] !== 'base' ? stateInstanceKeys[0] : '',
          storeActionPayload.id,
          ...stateInstanceKeys.slice(1)
        ]
      : [
          stateInstanceKeys[0] !== 'base' ? stateInstanceKeys[0] : '',
          ...stateInstanceKeys.slice(1)
        ]

    commit(storeMutationMethodKeyActing, true)

    return apiClientService[apiClientServiceKey][apiClientMethodKey](
      paths,
      storeActionPayload.data,
      storeActionPayload.params
    )
      .then((response: AxiosResponse) => {
        if (storeActionPayload.resolve) {
          storeActionPayload.resolve(response)
        } else {
          commit(storeMutationInstanceKeyGet(stateInstanceKeys), response.data)
        }

        commit(
          storeMutationInstanceKeyGet(['alert', 'success']),
          `Successful ${apiClientMethodKey} of ${apiClientServiceKey}`
        )
      })
      .catch((error: Error) =>
        commit(
          storeMutationInstanceKeyGet(['alert', 'error']),
          `Error in ${apiClientMethodKey} of ${apiClientServiceKey}: ${error.message}`
        )
      )
      .finally(() => commit(storeMutationMethodKeyActing, false))
  }
}
