import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event)
  // get code and state params from url
  const query = getQuery(event)
  const code = query.code?.toString() ?? null
  const state = query.state?.toString() ?? null

  const providerSchema = z.object({
    name: z.string(),
    email: z.string(),
    picture: z.string(),
  })

  // get stored state from cookies
  const storedState = getCookie(event, 'oauth_state')

  // validate state
  if (!code || !storedState || !state || storedState !== state)
    throw createError({ statusCode: 400 })

  try {
    const { existingUser, providerUser, createUser } = await googleAuth.validateCallback(code)
    const getUser = async () => {
      if (existingUser && existingUser.avatar !== providerUser.picture) {
        auth.updateUserAttributes(existingUser.userId, {
          avatar: providerUser.picture,
        })
        return existingUser
      }
      // create a new user if the user does not exist
      const parsedProviderUser = providerSchema.parse(providerUser)
      return await createUser({
        // attributes
        name: parsedProviderUser.name,
        email: parsedProviderUser.email,
        avatar: parsedProviderUser.picture,
      })
    }
    const user = await getUser()
    const session = await auth.createSession(user.userId)
    authRequest.setSession(session)
    return await sendRedirect(event, '/', 302)
  }
  catch {
    // invalid code
    throw createError({ statusCode: 400 })
  }
})
