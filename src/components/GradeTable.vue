<script setup lang="ts">
import TableItem from './TableItem.vue'

import { useGradesStore } from '@/stores/grades'
const gradesStore = useGradesStore()
const { notes } = gradesStore
</script>

<template>
  <table class="table table-xs md:table-md w-full max-w-lg">
    <thead>
      <tr>
        <th>Nota</th>
        <th>Porcentaje</th>
        <th>Eliminar</th>
      </tr>
    </thead>

    <tbody>
      <table-item v-for="(note, index) in notes" :key="index" :note="note" :title="`#${index + 1}`" :index="index" />
    </tbody>
  </table>
</template>
