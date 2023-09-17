import { google } from '@lucia-auth/oauth/providers'
import { auth } from './lucia'

const config = useRuntimeConfig()

export const googleAuth = google(
  auth,
  {
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    redirectUri: config.GOOGLE_REDIRECT_URI,
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
  },
)
