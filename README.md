# An opinionated Nuxt 3 starter for side projects

Zuxt is not meant to be used in an enterprise scenario, uses fun bleeding tech and will break as packages in the ecosystem are in development (mostly auth related). This is a starter I use personally for side projects and to explore cool tech, wip up POCs and try out things that I potentially want ot integrate


## Packages

[Nuxt](https://nuxt.com/v3) - The definitive Vue based framework for creating fullstack apps

[tRPC](https://trpc.io/) - Best way to create typesafe end to end apis

[Prisma](https://www.prisma.io/) - Next-gen ORM creating enabling the best DX for type-safety, migrations and auto-completion

[UnoCSS](https://github.com/unocss/unocss) - Tailwind-ish type library, more options more features, icons, fonts etc...

[NuxtAuth](https://github.com/sidebase/nuxt-auth) - Auth based on NexdtAuth implementation


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```
To create your db and/or automatically migrate your database

```bash
pnpx prisma db push
```
## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
