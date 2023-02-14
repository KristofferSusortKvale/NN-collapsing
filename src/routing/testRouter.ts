import express from 'express'
import { logDev } from '../logger/logger'

import type { Request, Response } from 'express'
import type { EndpointHandler } from '../try-catch-wrapper/tryCatchWrapperTypes'
import { unhandledErrorsWrapper } from '../try-catch-wrapper/wrapper'

export const testRouter = express.Router()

const testEndpointHandler: EndpointHandler = (req: Request, res: Response) => {
  logDev('running testEndpointHandler.')
  res.send('something to end request')
}

testRouter.get('/', (req: express.Request, res: express.Response) => {
  unhandledErrorsWrapper(testEndpointHandler, req, res)
})
