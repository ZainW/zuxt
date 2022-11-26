<script setup lang="ts">
const { $trpc } = useNuxtApp()
const noInput = await $trpc.exampleRouter.hello.query()
const yesInput = await $trpc.exampleRouter.hello.query({ text: 'John' })

</script>

<template>
  <div>
    <p>{{noInput}}</p>
    <p>{{ yesInput }}</p>
  </div>
</template>
