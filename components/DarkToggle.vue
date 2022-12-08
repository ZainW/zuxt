<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="dark:i-bi-moon i-ri-sun-fill" />
  </button>
</template>
