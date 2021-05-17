import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { InsightBaseI, InsightPageI } from '@/interfaces'

export type InsightContentT = ContentT<InsightBaseI>

export type InsightContentsT = ContentsT<InsightBaseI>

export type InsightRelationT = RelationT<InsightBaseI>

export type InsightRelationsT = RelationsT<InsightBaseI>

export type InsightResultT = ContentResultT<InsightBaseI>

export type InsightPageContentT = ContentT<InsightPageI>

export type InsightPageContentsT = ContentsT<InsightPageI>

export type InsightPageRelationT = RelationT<InsightPageI>

export type InsightPageRelationsT = RelationsT<InsightPageI>

export type InsightPageResultT = ContentResultT<InsightPageI>
