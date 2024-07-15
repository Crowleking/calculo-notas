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
      class="p-2 md:p-4 flex-grow gap-4 flex flex-col md:flex-row justify-between md:justify-evenly items-center md:items-start bg-base-100"
    >
      <section class="overflow-x-auto max-h-72 md:max-h-96">
        <grade-table />
      </section>

      <section class="bg-base-200 rounded-lg p-4 w-full md:w-1/3">
        <grade-information />
      </section>
    </main>

    <app-footer />
  </div>
</template>
