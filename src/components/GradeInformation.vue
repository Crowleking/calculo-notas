<script lang="ts" setup>
import { computed } from 'vue'
import TableItem from './TableItem.vue'
/* store */
import { useGradesStore } from '@/stores/grades'
const gradesStore = useGradesStore()

const roundedAverage = computed(() => {
  return gradesStore.average !== null ? gradesStore.average.toFixed(1) : '-'
})

const roundedFinalAverage = computed(() => {
  return gradesStore.finalAverage !== null ? gradesStore.finalAverage.toFixed(1) : '-'
})
</script>

<template>
  <div class="flex flex-col gap-4 items-center w-full">
    <!-- Mensajes de error -->
    <div v-show="gradesStore.hasInvalidTotalPercentage" role="alert" class="alert alert-error">
      <span>Tu ponderaci&oacute;n debe sumar 100%</span>
    </div>

    <!-- Check ver ingreso examen -->
    <div class="form-control w-full px-4">
      <label class="label cursor-pointer">
        <span class="label-text text-md antialiased font-semibold">Presiona si darás examen</span>
        <input type="checkbox" class="toggle toggle-secondary" v-model="gradesStore.isTakingExam" />
      </label>
    </div>

    <!-- Tabla ingreso examen -->
    <table v-show="gradesStore.isTakingExam" class="table table-xs md:table-md w-full">
      <tbody>
        <table-item :note="gradesStore.exam" :title="'Examen'" :index="1" :isExam="true" />
      </tbody>
    </table>

    <!-- Notas necesarias -->
    <div class="stats stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Promedio</div>
        <div class="stat-value">{{ roundedAverage }}</div>
      </div>

      <div class="stat" v-show="gradesStore.isTakingExam">
        <div class="stat-title">Final</div>
        <div class="stat-value" :class="{ 'text-error': gradesStore.needsImprovement }">
          {{ roundedFinalAverage }}
        </div>
      </div>

      <div class="stat" v-show="gradesStore.needsImprovement">
        <div class="stat-title">Necesitas</div>
        <div class="stat-value">{{ gradesStore.neededGrade }}</div>
      </div>
    </div>
  </div>
</template>
