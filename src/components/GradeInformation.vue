<script lang="ts" setup>
import { useGradesStore } from '@/stores/grades'

const gradesStore = useGradesStore()
</script>

<template>
  <div class="stats stats-horizontal shadow">
    <div class="stat">
      <div class="stat-title">Promedio</div>
      <div class="stat-value">{{ gradesStore.average || '-' }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">Necesitarás</div>
      <div class="stat-value">70</div>
    </div>
  </div>
</template>
