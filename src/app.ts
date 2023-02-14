import express from 'express'
import { logReqURL } from './logger/logger'
import { unhandledErrorsWrapper } from './try-catch-wrapper/wrapper'

import type { Request, Response } from 'express'
import type { EndpointHandler } from './try-catch-wrapper/tryCatchWrapperTypes'
import { testRouter } from './routing/testRouter'
import { logRouter } from './routing/logRouter'

export const ENVIRONMENT: string = process.env.ENVIRONMENT ?? 'DEVELOPMENT'

const app = express()
const port = 3000

app.use(logReqURL)

const helloWorld: EndpointHandler = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/', (req: express.Request, res: express.Response) => {
  unhandledErrorsWrapper(helloWorld, req, res)
})

app.use('/testing', testRouter)
app.use('/logging', logRouter)

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`)
})
