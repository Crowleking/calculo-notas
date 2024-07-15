import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Note } from '@/interfaces/note.interface'

const gradeForApproval = Number(import.meta.env.VITE_GRADE_FOR_APPROVAL)
const maxNumberOfGrades = import.meta.env.VITE_MAX_NUMBER_OF_GRADES

export const useGradesStore = defineStore('grades', () => {
  const notes = ref<Note[]>([
    { grade: null, percentage: null },
    { grade: null, percentage: null },
    { grade: null, percentage: null },
    { grade: null, percentage: null }
  ])

  const isTakingExam = ref(false)
  const exam = ref<Note>({ grade: null, percentage: null })

  function addNote() {
    if (notes.value.length >= maxNumberOfGrades) return
    notes.value.push({ grade: null, percentage: null })
  }

  function removeNote(index: number) {
    if (notes.value.length == 1) return
    notes.value.splice(index, 1)
  }

  function clearNotes() {
    exam.value.grade = null
    exam.value.percentage = null

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

    if (totalPercentage === 0) return null

    const weightedAverage = (totalWeightedGrades * 100) / totalPercentage
    return weightedAverage
  })

  const finalAverage = computed(() => {
    if (!isTakingExam.value || exam.value.grade === null || exam.value.percentage === null) {
      return average.value
    }

    const regularAverage = average.value
    const examGrade = exam.value.grade
    const examPercentage = exam.value.percentage

    if (regularAverage === null) {
      return null
    }

    const adjustedAverage =
      (regularAverage * (100 - examPercentage) + examGrade * examPercentage) / 100
    return adjustedAverage
  })

  const neededGrade = computed(() => {
    if (finalAverage.value === null) {
      return null
    }

    const regularAverage = average.value
    const examPercentage = exam.value.percentage

    if (regularAverage === null || examPercentage === null) {
      return null
    }

    for (let grade = 0; grade <= 100; grade++) {
      const adjustedAverage =
        (regularAverage * (100 - examPercentage) + grade * examPercentage) / 100
      if (Math.round(adjustedAverage) >= gradeForApproval) {
        return grade
      }
    }

    return 100
  })

  const needsImprovement = computed(() => {
    if (!isTakingExam.value || finalAverage.value === null) {
      return false
    }
    return Math.round(finalAverage.value) < gradeForApproval
  })

  const hasInvalidTotalPercentage = computed(() => {
    const nonEmptyNotes = notes.value.filter((note) => note.percentage !== null)
    if (nonEmptyNotes.length === 0) {
      return 0
    }
    const totalPercentage = nonEmptyNotes.reduce((sum, note) => sum + note.percentage!, 0)
    return totalPercentage != 100
  })

  return {
    notes,
    isTakingExam,
    exam,
    addNote,
    removeNote,
    clearNotes,
    updateGrade,
    updatePercentage,
    average,
    finalAverage,
    neededGrade,
    needsImprovement,
    hasInvalidTotalPercentage
  }
})
