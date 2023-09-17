export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event)
  const { session } = await authRequest.validateUser()
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }
  await auth.invalidateSession(session.sessionId) // invalidate current session
  authRequest.setSession(null) // remove session cookie
  return null
})
