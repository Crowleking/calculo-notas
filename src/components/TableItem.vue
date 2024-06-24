<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useGradesStore } from '@/stores/grades'
import type { Note } from '@/interfaces/note.interface'
import IconDelete from '@/icons/IconDelete.vue'

const props = defineProps<{
  index: number
  title: string
  note: Note
}>()

const gradesStore = useGradesStore()
const grade = ref(props.note.grade)
const percentage = ref(props.note.percentage)

/* watchers */

watch(
  () => props.note.grade,
  (newVal) => (grade.value = newVal)
)
watch(
  () => props.note.percentage,
  (newVal) => (percentage.value = newVal)
)

/* methods */

const removeNote = (index: number) => {
  gradesStore.removeNote(index)
}

const updateGrade = (index: number, grade: number | null) => {
  gradesStore.updateGrade(index, grade)
}

const updatePercentage = (index: number, percentage: number | null) => {
  gradesStore.updatePercentage(index, percentage)
}
</script>

<template>
  <tr>
    <td>
      <div class="join w-full">
        <div class="flex join-item input input-bordered items-center bg-base-200">
          {{ title }}
        </div>
        <input
          type="text"
          placeholder="60"
          class="input input-bordered join-item w-full"
          v-model.number="grade"
          @input="updateGrade(index, grade)"
        />
      </div>
    </td>

    <td>
      <div class="join w-full">
        <input
          type="text"
          placeholder="25"
          class="input input-bordered join-item w-full"
          v-model.number="percentage"
          @input="updatePercentage(index, percentage)"
        />
        <div class="flex join-item input input-bordered items-center bg-base-200">%</div>
      </div>
    </td>

    <td>
      <button @click="removeNote(index)" title="Eliminar" class="btn btn-outline btn-error">
        <icon-delete />
      </button>
    </td>
  </tr>
</template>
