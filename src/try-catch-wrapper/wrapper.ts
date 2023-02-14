import { logError } from '../logger/logger'

import type { Request, Response, NextFunction } from 'express'
import type { ErrorType } from '../errors/errorTypes'
import type { CatchHandler, EndpointHandler } from './tryCatchWrapperTypes'
import { unhandledError } from '../errors/errors'

export const tryCatchWrapper = (
  handler: EndpointHandler,
  catchHandler: CatchHandler,
  req: Request,
  res: Response,
  next?: NextFunction
): void => {
  try {
    handler(req, res, next)
  } catch (e) {
    const error = e as ErrorType
    const handledError = catchHandler(error)
    logError(handledError)
    res.status(handledError.status).send(handledError.userMessage)
  }
}

export const unhandledErrorsWrapper = (
  handler: EndpointHandler,
  req: Request,
  res: Response,
  next?: NextFunction
): void => {
  try {
    handler(req, res, next)
  } catch (e) {
    logError(unhandledError)
    res.status(unhandledError.status).send(unhandledError.userMessage)
  }
}
