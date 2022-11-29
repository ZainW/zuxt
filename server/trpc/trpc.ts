import { TRPCError, initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'
import { type Context } from './context'

// Avoid exporting the entire t-object since it's not very
// descriptive and can be confusing to newcomers used to t
// meaning translation in i18n libraries.
const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
})

// Base router and procedure helpers
export const router = t.router
export const publicProcedure = t.procedure

const isAuthed = t.middleware(({ ctx, next }) => {
  if (ctx.status !== 'unauthenticated' && !ctx.session)
    throw new TRPCError({ code: 'UNAUTHORIZED' })

  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  })
})

export const privateProcedureWithAuth = t.procedure.use(isAuthed)
