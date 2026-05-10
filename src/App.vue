<script setup lang="ts">
import { useQuiz } from './composables/useQuiz'
import HomePage from './components/HomePage.vue'
import StartScreen from './components/StartScreen.vue'
import QuizQuestion from './components/QuizQuestion.vue'
import ResultScreen from './components/ResultScreen.vue'

const {
  state,
  currentIndex,
  score,
  selectedAnswer,
  answered,
  quizQuestions,
  answers,
  currentQuestion,
  progress,
  startQuiz,
  selectAnswer,
  nextQuestion,
  restart,
  QUIZ_LENGTH
} = useQuiz()
</script>

<template>
  <q-layout view="hHh lpR fFfF">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-toolbar-title class="toolbar-title" @click="restart" style="cursor: pointer">
          <q-icon name="favorite" size="24px" class="q-mr-sm" />
          Kviz o Zdravlju
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="page-content">
        <HomePage v-if="state === 'home'" @start-quiz="startQuiz" />

        <StartScreen v-else-if="state === 'start'" @start="startQuiz" />

        <QuizQuestion
          v-else-if="state === 'playing' && currentQuestion"
          :question="currentQuestion"
          :question-number="currentIndex + 1"
          :total-questions="QUIZ_LENGTH"
          :progress="progress"
          :selected-answer="selectedAnswer"
          :answered="answered"
          @select="selectAnswer"
          @next="nextQuestion"
        />

        <ResultScreen
          v-else-if="state === 'result'"
          :score="score"
          :total-questions="QUIZ_LENGTH"
          :quiz-questions="quizQuestions"
          :answers="answers"
          @restart="restart"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
  background: #f8fafb;
}

.app-header {
  background: linear-gradient(135deg, #00897b, #26a69a) !important;
}

.toolbar-title {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.3px;
}

.page-content {
  background: #f8fafb;
  min-height: 100vh;
}
</style>
