<script setup lang="ts">
const { status, data, signIn, signOut } = await useSession({
  // Whether a session is required. If it is, a redirect to the signin page will happen if no active session exists
  required: true,
})
// status.value // Session status: `unauthenticated`, `loading`, `authenticated`
// data.value // Session data, e.g., expiration, user.email, ...
// await signIn() // Sign in the user
// await signOut() // Sign out the user
</script>

<template>
  <div>
    <pre>
      {{ status }}
    </pre>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
