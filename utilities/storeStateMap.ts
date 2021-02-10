export function storeStateMap(clientModel: object): () => object {
  return () => ({
    acting: false,
    alert: {
      error: '',
      success: ''
    },
    ...clientModel
  })
}
