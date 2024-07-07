<script lang="ts" setup>
import TableItem from './TableItem.vue'
/* store */
import { useGradesStore } from '@/stores/grades'
const gradesStore = useGradesStore()
const { exam, average } = gradesStore
</script>

<template>
  <section class="flex flex-col gap-4 items-center">
    <!-- Check ver ingreso examen -->
    <div class="form-control w-52">
      <label class="label cursor-pointer">
        <span class="label-text">Dar examen</span>
        <input type="checkbox" class="toggle toggle-secondary" />
      </label>
    </div>

    <!-- Tabla ingreso examen -->
    <table class="table table-xs md:table-md w-full max-w-lg">
      <tbody>
        <table-item :note="exam" :title="'Examen'" :index="1" />
      </tbody>
    </table>

    <!-- Notas necesarias -->
    <div class="stats stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Promedio</div>
        <div class="stat-value">{{ average || '-' }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Promedio final</div>
        <div class="stat-value">-</div>
      </div>
    </div>
  </section>
</template>
