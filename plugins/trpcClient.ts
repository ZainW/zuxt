import { httpBatchLink, createTRPCProxyClient } from '@trpc/client'
import type { AppRouter } from '@/server/trpc/routers'
import SuperJSON from 'superjson'

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
