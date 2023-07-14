import lucia from "lucia-auth";
import { h3 } from "lucia-auth/middleware";
import { connect } from "@planetscale/database";
import { planetscale } from "@lucia-auth/adapter-mysql";

const config = useRuntimeConfig()
const connection = connect({
  url: config.DATABASE_URL,
})

export const auth = lucia({
    // @ts-expect-error - planetscale is not a valid adapter
	adapter: planetscale(connection),
	env: process.env.development ? "DEV" : "PROD",
	middleware: h3(),
  sessionCookie: {
    sameSite: 'lax',
    path: '/',
    // TODO: input your domain here for production
    domain: process.env.NODE_ENV === 'production' ? '' : 'localhost',
  },
});

export type Auth = typeof auth;
