import { bigint, index, mysqlEnum, mysqlTable, text, tinyint, uniqueIndex, varchar } from 'drizzle-orm/mysql-core'


export const authKey = mysqlTable('auth_key', {
  id: varchar('id', { length: 191 }).primaryKey().notNull(),
  hashedPassword: varchar('hashed_password', { length: 191 }),
  userId: varchar('user_id', { length: 191 }).notNull(),
  primaryKey: tinyint('primary_key').notNull(),
  expires: bigint('expires', { mode: 'number' }),
},
(table) => {
  return {
    idKey: uniqueIndex('auth_key_id_key').on(table.id),
    userIdIdx: index('auth_key_user_id_idx').on(table.userId),
  }
})

export const authSession = mysqlTable('auth_session', {
  id: varchar('id', { length: 191 }).primaryKey().notNull(),
  userId: varchar('user_id', { length: 191 }).notNull(),
  activeExpires: bigint('active_expires', { mode: 'number' }).notNull(),
  idleExpires: bigint('idle_expires', { mode: 'number' }).notNull(),
},
(table) => {
  return {
    idKey: uniqueIndex('auth_session_id_key').on(table.id),
    userIdIdx: index('auth_session_user_id_idx').on(table.userId),
  }
})

export const authUser = mysqlTable('auth_user', {
  id: varchar('id', { length: 191 }).primaryKey().notNull(),
  avatar: text('avatar'),
  email: varchar('email', { length: 191 }).notNull(),
  name: varchar('name', { length: 191 }),
  role: mysqlEnum('role', ['ADMIN', 'USER']).default('USER').notNull(),
},
(table) => {
  return {
    emailKey: uniqueIndex('auth_user_email_key').on(table.email),
    idKey: uniqueIndex('auth_user_id_key').on(table.id),
  }
})

