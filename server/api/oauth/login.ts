import { googleAuth } from '../../utils/googleAuth'

export default defineEventHandler(async (event) => {
  const [url, state] = await googleAuth.getAuthorizationUrl()
  setCookie(event, 'oauth_state', state, {
    path: '/',
    maxAge: 60 * 60,
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    domain: process.env.NODE_ENV === 'production' ? 'recipes.wania.app' : undefined,
  })
  return await sendRedirect(event, url.toString(), 302)
})
