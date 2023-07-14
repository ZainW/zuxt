import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'

const config = useRuntimeConfig()

// create the connection
const connection = connect({
  url: config.DATABASE_URL,
})

export const db = drizzle(connection)
