import type { Request, Response, NextFunction } from 'express'
import { ErrorType } from '../errors/errorTypes'

export type endpointHandler = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void

export type catchHandler = (error: ErrorType) => ErrorType
