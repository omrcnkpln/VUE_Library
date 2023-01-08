<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <RouterLink to="/">Home</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
* {
  border: 1px solid #ccc;
  border-radius: 2rem;
  padding: 2rem;
}
</style>