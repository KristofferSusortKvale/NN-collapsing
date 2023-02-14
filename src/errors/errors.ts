import type { ErrorType } from './errorTypes'

export const unhandledError: ErrorType = {
  status: 500,
  userMessage: 'The server encountered an unexpected error.',
  logMessage: 'Server encountered an unhandled error.',
}
