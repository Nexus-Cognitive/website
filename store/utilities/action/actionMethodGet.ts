import { AxiosResponse } from 'axios'
import type { ActionMethodT, ClientMethodKeyT, ClientServiceT } from '@/types'
import type { ActionPayloadI, StoreContextI } from '@/interfaces'
import { mutationMethodKeyGet } from '@/store'

export function actionMethodGet(
  clientService: ClientServiceT,
  stateKey: string,
  clientMethodKey: ClientMethodKeyT
): ActionMethodT {
  return (
    { commit }: StoreContextI,
    actionPayload: ActionPayloadI = {}
  ): void => {
    const mutationModelKeyActing = mutationMethodKeyGet('acting')

    commit(mutationModelKeyActing, true)

    clientService[stateKey][clientMethodKey](
      actionPayload.id,
      actionPayload.data,
      actionPayload.params
    )
      .then(({ data }: AxiosResponse) => {
        commit(mutationMethodKeyGet(stateKey), data)

        if (!actionPayload.silent) {
          commit(
            mutationMethodKeyGet('alert'),
            `Successful ${clientMethodKey} of ${stateKey}`
          )
        }
      })
      .catch((error: Error) => {
        if (!actionPayload.silent) {
          commit(
            mutationMethodKeyGet('alert'),
            `Error in ${clientMethodKey} of ${stateKey}: ${error}`
          )
        }
      })
      .finally(() => commit(mutationModelKeyActing, false))
  }
}
