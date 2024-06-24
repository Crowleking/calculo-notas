<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import GradeTable from './components/GradeTable.vue'
import GradeInformation from './components/GradeInformation.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <app-navbar />

    <main
      class="p-4 flex-grow flex gap-4 flex-col md:flex-row justify-between md:justify-around items-center md:items-start bg-base-100"
    >
      <section class="overflow-x-auto max-h-80 md:max-h-96">
        <grade-table />
      </section>

      <section>
        <grade-information />
      </section>
    </main>

    <app-footer />
  </div>
</template>
