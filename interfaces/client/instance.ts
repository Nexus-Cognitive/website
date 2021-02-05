import type { ClientMethodI } from '@/interfaces'

export interface ClientInstanceI {
  DELETE?: ClientMethodI
  GET?: ClientMethodI
  PATCH?: ClientMethodI
  POST?: ClientMethodI
  PUT?: ClientMethodI
}
