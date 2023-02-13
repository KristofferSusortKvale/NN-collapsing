import { ErrorType } from './errorTypes'

export const unexpectedError = (e: Error): ErrorType => {
  return {
    status: 500,
    userMessage: 'The server encountered an unexpected error.',
    logMessage: `Server encountered an unhandled error. \nError: ${e}`,
  }
}
