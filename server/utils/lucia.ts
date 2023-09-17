import { lucia } from 'lucia'
import { h3 } from 'lucia/middleware'

import { drizzle } from 'drizzle-orm/libsql'
import { libsql } from '@lucia-auth/adapter-sqlite'
import { createClient } from '@libsql/client'

const sqlclient = createClient({
  url: 'file:drizzle/main.db',
})

export const db = drizzle(sqlclient)

// const config = useRuntimeConfig()

export const auth = lucia({
  adapter: libsql(sqlclient, {
    user: 'auth_user',
    key: 'user_key',
    session: 'user_session',
  }),
  env: process.env.development ? 'DEV' : 'PROD',
  middleware: h3(),
  sessionCookie: {
    attributes: {
      sameSite: 'lax',
      path: '/',
      domain: process.env.NODE_ENV === 'production' ? '' : 'localhost',
    },
  },
})

export type Auth = typeof auth
