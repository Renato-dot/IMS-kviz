import { ref, computed } from 'vue'
import { questions, type Question } from '../data/questions'

const QUIZ_LENGTH = 10

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export type QuizState = 'start' | 'playing' | 'result'

export function useQuiz() {
  const state = ref<QuizState>('start')
  const currentIndex = ref(0)
  const score = ref(0)
  const selectedAnswer = ref<number | null>(null)
  const answered = ref(false)
  const quizQuestions = ref<Question[]>([])
  const answers = ref<(number | null)[]>([])

  const currentQuestion = computed(() => quizQuestions.value[currentIndex.value])
  const progress = computed(() => ((currentIndex.value + 1) / QUIZ_LENGTH) * 100)
  const isLastQuestion = computed(() => currentIndex.value === QUIZ_LENGTH - 1)

  function startQuiz() {
    quizQuestions.value = shuffleArray(questions).slice(0, QUIZ_LENGTH)
    currentIndex.value = 0
    score.value = 0
    selectedAnswer.value = null
    answered.value = false
    answers.value = new Array(QUIZ_LENGTH).fill(null)
    state.value = 'playing'
  }

  function selectAnswer(index: number) {
    if (answered.value) return
    selectedAnswer.value = index
    answered.value = true
    answers.value[currentIndex.value] = index
    if (index === currentQuestion.value.correctIndex) {
      score.value++
    }
  }

  function nextQuestion() {
    if (isLastQuestion.value) {
      state.value = 'result'
    } else {
      currentIndex.value++
      selectedAnswer.value = null
      answered.value = false
    }
  }

  function restart() {
    state.value = 'start'
  }

  return {
    state,
    currentIndex,
    score,
    selectedAnswer,
    answered,
    quizQuestions,
    answers,
    currentQuestion,
    progress,
    isLastQuestion,
    startQuiz,
    selectAnswer,
    nextQuestion,
    restart,
    QUIZ_LENGTH
  }
}
