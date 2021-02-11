import { AxiosResponse } from 'axios'
import type {
  ActionMethodT,
  APIClientMethodKeyT,
  APIClientServiceT
} from '@/types'
import type { ActionPayloadI, StoreContextI } from '@/interfaces'
import { storeMutationMethodKeyGet } from '@/utilities'

export function storeActionMethodGet(
  apiClientService: APIClientServiceT,
  stateKey: string,
  apiClientMethodKey: APIClientMethodKeyT
): ActionMethodT {
  return (
    { commit }: StoreContextI,
    actionPayload: ActionPayloadI = {}
  ): Promise<void> => {
    const mutationMethodKeyActing = storeMutationMethodKeyGet('acting')

    commit(mutationMethodKeyActing, true)

    return apiClientService[stateKey][apiClientMethodKey](
      actionPayload.id,
      actionPayload.data,
      actionPayload.params
    )
      .then((response: AxiosResponse) => {
        if (actionPayload.resolve !== undefined) {
          return actionPayload.resolve(response)
        } else {
          commit(storeMutationMethodKeyGet(stateKey), response.data)
        }

        if (!actionPayload.silent) {
          commit(
            storeMutationMethodKeyGet('alert', 'success'),
            `Successful ${apiClientMethodKey} of ${stateKey}`
          )
        }
      })
      .catch((error: Error) => {
        if (!actionPayload.silent) {
          commit(
            storeMutationMethodKeyGet('alert', 'error'),
            `Error in ${apiClientMethodKey} of ${stateKey}: ${error.message}`
          )
        }
      })
      .finally(() => commit(mutationMethodKeyActing, false))
  }
}
