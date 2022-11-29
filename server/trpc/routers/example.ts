import { z } from 'zod'
import { privateProcedureWithAuth, publicProcedure, router } from '../trpc'

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
  protectedHello: privateProcedureWithAuth.input(
    z.object({
      text: z.string().nullish(),
    }).optional(),
  ).query(({ input }) => {
    return {
      greeting: `hello form protected, ${input?.text ?? 'world'}`,
    }
  }),
  getAll: publicProcedure
    .query(({ ctx }) => {
      const examples = ctx.prisma.example.findMany()
      return examples
    },
    ),
  getOne: publicProcedure.input(
    z.object({
      id: z.string(),
    }),
  ).query(({ input, ctx }) => {
    const example = ctx.prisma.example.findUnique({
      where: {
        id: input.id,
      },
    })
    return example
  }),
})
