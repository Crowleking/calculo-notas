import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Note } from '@/interfaces/note.interface'

export const useGradesStore = defineStore('grades', () => {
  const notes = ref<Note[]>([
    { grade: null, percentage: null },
    { grade: null, percentage: null },
    { grade: null, percentage: null },
    { grade: null, percentage: null },
  ])

  const exam = ref<Note>({ grade: null, percentage: null })

  return {
    notes,
    exam
  }
})
