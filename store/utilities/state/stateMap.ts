export function stateMap(clientModel: object): () => object {
  return () => ({
    acting: false,
    alert: '',
    ...clientModel
  })
}
