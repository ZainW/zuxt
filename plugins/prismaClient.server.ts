import client from "~~/lib/prisma";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      prisma: client,
    },
  };
})
