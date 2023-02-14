import type { Request, Response, NextFunction } from 'express'
import type { ErrorType } from '../errors/errorTypes'

export type EndpointHandler = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void

export type CatchHandler = (error: ErrorType) => ErrorType
