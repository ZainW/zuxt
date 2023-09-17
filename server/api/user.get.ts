import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const userSchema = z.object({
    userId: z.string(),
    email: z.string().email(),
    name: z.string(),
    avatar: z.string().url(),
    role: z.string(),
  })
  const authRequest = auth.handleRequest(event)
  const { user } = await authRequest.validateUser()
  const returnUser = userSchema.safeParse(user)
  if (!returnUser.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'no user found',
    })
  }
  return returnUser.data
})
