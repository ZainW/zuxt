/* eslint-disable @typescript-eslint/no-unused-vars */
import { getServerSession } from '#auth'
import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

import {prisma} from '~~/lib/prisma'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext (
  event: H3Event
) {
  const session = await getServerSession(event)
  if (!session) {
    return {
      status: 'unauthenticated'
    }
  }
  // for API-response caching see https://trpc.io/docs/caching
  // console.log('cookies', parseCookies(event))
  
  return { prisma, status: 'authenticated', session }
}

export type Context = inferAsyncReturnType<typeof createContext>