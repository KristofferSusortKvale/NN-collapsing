import express, { Request, Response } from 'express'
import { logReqURL } from './logger/logger'
import { endpointHandler } from './try-catch-wrapper/tryCatchWrapperTypes'
import { unhandledErrorsWrapper } from './try-catch-wrapper/wrapper'
const app = express()
const port = 3000

app.use(logReqURL)

const helloWorld: endpointHandler = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/', (req: express.Request, res: express.Response) => {
  unhandledErrorsWrapper(helloWorld, req, res)
})

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`)
})
