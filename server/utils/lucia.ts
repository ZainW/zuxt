import {lucia} from "lucia";
import { h3 } from "lucia/middleware";
import { connect } from "@planetscale/database";
import { planetscale } from "@lucia-auth/adapter-mysql";

const config = useRuntimeConfig()
const connection = connect({
  url: config.DATABASE_URL,
})

export const auth = lucia({
	adapter: planetscale(connection),
	env: process.env.development ? "DEV" : "PROD",
	middleware: h3(),
  sessionCookie: {
    attributes: {
      sameSite: 'lax',
      path: '/',
      // TODO: input your domain here for production
      domain: process.env.NODE_ENV === 'production' ? '' : 'localhost',
    }
  },
});

export type Auth = typeof auth;
