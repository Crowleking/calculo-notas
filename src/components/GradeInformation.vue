<script lang="ts" setup>
import TableItem from './TableItem.vue'
/* store */
import { useGradesStore } from '@/stores/grades'
const gradesStore = useGradesStore()
const { exam } = gradesStore
</script>

<template>
  <div class="flex flex-col gap-4 items-center max-w-lg">
    <!-- Check ver ingreso examen -->
    <div class="form-control w-full px-4">
      <label class="label cursor-pointer">
        <span class="label-text text-md antialiased font-semibold">Presiona si darás examen</span>
        <input type="checkbox" class="toggle toggle-secondary" />
      </label>
    </div>

    <!-- Tabla ingreso examen -->
    <table class="table table-xs md:table-md w-full">
      <tbody>
        <table-item :note="exam" :title="'Examen'" :index="1" />
      </tbody>
    </table>

    <!-- Notas necesarias -->
    <div class="stats stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Promedio</div>
        <div class="stat-value">{{ gradesStore.average || '-' }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Promedio final</div>
        <div class="stat-value">-</div>
      </div>
    </div>
  </div>
</template>
