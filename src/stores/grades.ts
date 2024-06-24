import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Note } from '@/interfaces/note.interface'

const maxNumberOfGrades = import.meta.env.VITE_MAX_NUMBER_OF_GRADES

export const useGradesStore = defineStore('grades', () => {
  const notes = ref<Note[]>([
    { grade: null, percentage: null },
    { grade: null, percentage: null },
    { grade: null, percentage: null },
    { grade: null, percentage: null }
  ])

  function addNote() {
    if (notes.value.length >= maxNumberOfGrades) return
    notes.value.push({ grade: null, percentage: null })
  }

  function removeNote(index: number) {
    if (notes.value.length == 1) return
    notes.value.splice(index, 1)
  }

  function clearNotes() {
    notes.value.map((note) => {
      note.grade = null
      note.percentage = null
      return note
    })
  }

  function updateGrade(index: number, grade: number | null) {
    notes.value[index].grade = grade
  }

  function updatePercentage(index: number, percentage: number | null) {
    notes.value[index].percentage = percentage
  }

  const average = computed(() => {
    let totalWeightedGrades = 0
    let totalPercentage = 0

    notes.value.forEach((note) => {
      if (note.grade !== null && note.percentage !== null) {
        totalWeightedGrades += note.grade * (note.percentage / 100)
        totalPercentage += note.percentage
      }
    })

    // If totalPercentage is 0, return null to avoid division by zero
    const hasValidPercentage = totalPercentage > 0
    if (!hasValidPercentage) return null

    const weightedAverage = (totalWeightedGrades * 100) / totalPercentage
    const roundedAverage = Math.round(weightedAverage)
    return roundedAverage
  })

  return {
    notes,
    addNote,
    removeNote,
    clearNotes,
    updateGrade,
    updatePercentage,
    average
  }
})
