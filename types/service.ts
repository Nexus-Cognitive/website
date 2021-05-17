import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { ServiceBaseI } from '@/interfaces'

export type ServiceContentT = ContentT<ServiceBaseI>

export type ServiceContentsT = ContentsT<ServiceBaseI>

export type ServiceRelationT = RelationT<ServiceBaseI>

export type ServiceRelationsT = RelationsT<ServiceBaseI>

export type ServiceResultT = ContentResultT<ServiceBaseI>
