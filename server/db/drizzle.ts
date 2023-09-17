import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

const sqlclient = createClient({
  url: 'file:drizzle/main.db',
})

export const db = drizzle(sqlclient)
