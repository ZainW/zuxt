import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { exampleRouter } from './example'

export const appRouter = router({
  exampleRouter: exampleRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
