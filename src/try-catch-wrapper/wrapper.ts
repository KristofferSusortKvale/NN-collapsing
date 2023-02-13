import { Request, Response, NextFunction } from 'express'
import { unexpectedError } from '../errors/errors'
import { ErrorType } from '../errors/errorTypes'
import { logError } from '../logger/logger'
import { catchHandler, endpointHandler } from './tryCatchWrapperTypes'

export const tryCatchWrapper = (
  handler: endpointHandler,
  catchHandler: catchHandler,
  req: Request,
  res: Response,
  next?: NextFunction
) => {
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
  handler: endpointHandler,
  req: Request,
  res: Response,
  next?: NextFunction
) => {
  try {
    handler(req, res, next)
  } catch (e) {
    const error = unexpectedError(e)
    logError(error)
    res.status(error.status).send(error.userMessage)
  }
}
