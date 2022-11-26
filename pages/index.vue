<script setup lang="ts">
const { $client } = useNuxtApp()
const noInput = await $client.hello.query()
const yesInput = await $client.hello.query({ text: 'John' })

</script>

<template>
  <div>
    <p>{{noInput}}</p>
    <p>{{ yesInput }}</p>
  </div>
</template>
