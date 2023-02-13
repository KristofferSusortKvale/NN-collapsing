import type { Request, Response, NextFunction } from 'express'
import { ErrorType } from '../errors/errorTypes'

// Middlewares
export const logReqURL = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log('Request URL: ', req.url)
  next()
}

// Other Logger Functions
export const logError = (error: ErrorType) => {
  console.log('Error: ', error.logMessage)
}
