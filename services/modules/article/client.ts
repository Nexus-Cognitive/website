import * as Models from '@/models'
import * as Services from '@/services'
import * as Types from '@/types'

export const Client: Types.Client.Service = Services.Utilities.Client.map(
  'article',
  Models.Article.Client
)
