import { ArticleClientM } from '@/models'
import { ArticleClientS } from '@/services'
import { storeModuleMap } from '@/utilities'

export const { state, mutations, actions, getters } = storeModuleMap(
  ArticleClientM,
  ArticleClientS
)
