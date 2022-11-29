<script setup lang="ts">
const { $trpc } = useNuxtApp()

const inputRef = ref('World!!!!')

const { data: noInput } = await useAsyncData(async () => {
  return await $trpc.exampleRouter.hello.query()
})

const { data: yesInput, refresh } = await useAsyncData(
  'yesInput',
  async () => $trpc.exampleRouter.hello.query({ text: inputRef.value }),
)
function refreshYesInput() {
  refresh()
}
</script>

<template>
  <div>
    <p>{{ noInput?.greeting }}</p>
    <input v-model="inputRef" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" placeholder="you@example.com">
    <p>{{ yesInput?.greeting }}</p> <button @click="refreshYesInput()">
      click me to submit
    </button>
  </div>
</template>
