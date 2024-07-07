<script setup ts>
import { computed } from 'vue'
/* iconos */
import IconAdd from '@/icons/IconAdd.vue'
import IconClear from '@/icons/IconClear.vue'
/* store */
import { useGradesStore } from '@/stores/grades'
const gradesStore = useGradesStore()
const { addNote, clearNotes, notes } = gradesStore
/* limites de notas */
const maxNumberOfGrades = import.meta.env.VITE_MAX_NUMBER_OF_GRADES
const notesLength = computed(() => notes.length)
</script>

<template>
  <header>
    <nav class="navbar justify-center bg-base-300">
      <a class="btn btn-ghost text-lg no-animation"> Calculadora Promedio Ponderado </a>
    </nav>

    <nav class="flex justify-center bg-base-200">
      <ul class="menu menu-horizontal justify-center gap-2">
        <li>
          <a
            class="btn btn-secondary text-secondary-content"
            :class="{ 'btn-disabled': notesLength >= maxNumberOfGrades }"
            @click="addNote"
          >
            <icon-add />
            Agregar
          </a>
        </li>

        <li>
          <a class="btn btn-secondary text-secondary-content" @click="clearNotes">
            <icon-clear />
            Limpiar
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
