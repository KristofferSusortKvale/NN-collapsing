import express from 'express'
import { logInfo, logReqURL } from './logger/logger'

import { testRouter } from './routing/testRouter'
import { logRouter } from './routing/logRouter'

export const ENVIRONMENT: string = process.env.ENVIRONMENT ?? 'DEVELOPMENT'

const app = express()
const port = 3000

app.use(logReqURL)

app.use('/testing', testRouter)
app.use('/logging', logRouter)

app.listen(port, () => {
  logInfo(`App is starting in ${ENVIRONMENT} mode`)
  logInfo(`Express is listening at http://localhost:${port}`)
})
