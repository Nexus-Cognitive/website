export function storeStateMap(apiClientModel: object): () => object {
  return () => ({
    acting: false,
    alert: {
      error: '',
      success: ''
    },
    ...apiClientModel
  })
}
