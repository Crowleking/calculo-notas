<script setup lang="ts">
import logo from '../assets/logo.png'
const copyrightMessage = import.meta.env.VITE_COPYRIGHT_MESSAGE
</script>

<template>
  <footer class="footer items-center p-4 bg-base-200 text-base-content">
    <aside class="items-center grid-flow-col place-self-end select-none">
      <img alt="Logo" :src="logo" class="w-4" />
      <span>{{ copyrightMessage }}</span>
    </aside>
  </footer>
</template>
