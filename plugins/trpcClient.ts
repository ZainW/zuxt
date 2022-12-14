import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import SuperJSON from 'superjson'
import type { AppRouter } from '@/server/trpc/routers'

export default defineNuxtPlugin(() => {
  const client = createTRPCProxyClient<AppRouter>({
    transformer: SuperJSON,
    links: [
      httpBatchLink({
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         **/
        url: 'http://localhost:3000/api/trpc',
      }),
    ],
  })

  return {
    provide: {
      trpc: client,
    },
  }
})
