import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const exampleRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }).optional(),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
  getAll: publicProcedure
    .query(({ ctx }) => {
      const example = ctx.prisma.example.findMany()
      return example
    }
  ),
})
