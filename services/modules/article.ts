import { ArticleM } from '@/models'
import { ClientSU } from '@/services'
import { ServiceT } from '@/types'

export const ArticleS: ServiceT = ClientSU.map('article', ArticleM)
