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
    const storeMutationMethodKeyAlert = storeMutationInstanceKeyGet(['alert'])

    const paths: IDT[] = storeActionPayload.id
      ? [
          stateInstanceKeys[0],
          storeActionPayload.id,
          ...stateInstanceKeys.slice(1)
        ]
      : stateInstanceKeys

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
          storeMutationMethodKeyAlert,
          `Successful ${apiClientMethodKey} of ${apiClientServiceKey}`
        )
      })
      .catch((error: Error) =>
        commit(
          storeMutationMethodKeyAlert,
          `Error in ${apiClientMethodKey} of ${apiClientServiceKey}: ${error.message}`
        )
      )
      .finally(() => commit(storeMutationMethodKeyActing, false))
  }
}
