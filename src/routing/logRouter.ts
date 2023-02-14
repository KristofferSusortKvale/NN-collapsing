import express from 'express'
import { logDev, logError, logWarn } from '../logger/logger'
import { unhandledErrorsWrapper } from '../try-catch-wrapper/wrapper'

import type { Request, Response } from 'express'
import type { EndpointHandler } from '../try-catch-wrapper/tryCatchWrapperTypes'
import type { ErrorType } from '../errors/errorTypes'

export const logRouter = express.Router()

const logHandler: EndpointHandler = (req: Request, res: Response): void => {
  const error: ErrorType = {
    status: 200,
    userMessage: 'This is the user message',
    logMessage: 'This is the error log message',
  }
  switch (req.params.type) {
    case 'dev':
      logDev('This is a dev log')
      break
    case 'warn':
      logWarn('This is a warn log')
      break
    case 'error':
      logError(error)
      break
  }
  res.status(200).send(req.params.type)
}

logRouter.get('/:type', (req: Request, res: Response) => {
  unhandledErrorsWrapper(logHandler, req, res)
})
