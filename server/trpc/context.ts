import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import { getServerSession } from '#auth'

import { prisma } from '~~/lib/prisma'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(
  event: H3Event,
) {
  const session = await getServerSession(event)
  const status = session ? 'authenticated' : 'unauthenticated'
  // for API-response caching see https://trpc.io/docs/caching
  // console.log('cookies', parseCookies(event))

  return { session, status, prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
