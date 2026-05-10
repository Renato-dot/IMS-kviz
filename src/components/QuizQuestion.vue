<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '../data/questions'

const props = defineProps<{
  question: Question
  questionNumber: number
  totalQuestions: number
  progress: number
  selectedAnswer: number | null
  answered: boolean
}>()

const emit = defineEmits<{
  select: [index: number]
  next: []
}>()

const optionColors = ['#00897b', '#e65100', '#0288d1', '#5e35b1']

function getOptionClass(index: number) {
  if (!props.answered) {
    return props.selectedAnswer === index ? 'selected' : ''
  }
  if (index === props.question.correctIndex) return 'correct'
  if (index === props.selectedAnswer && index !== props.question.correctIndex) return 'wrong'
  return 'dimmed'
}

function getOptionIcon(index: number) {
  if (!props.answered) return ''
  if (index === props.question.correctIndex) return 'check_circle'
  if (index === props.selectedAnswer && index !== props.question.correctIndex) return 'cancel'
  return ''
}

const isCorrect = computed(() =>
  props.answered && props.selectedAnswer === props.question.correctIndex
)
</script>

<template>
  <div class="quiz-question">
    <div class="progress-section">
      <div class="progress-info">
        <span class="question-counter">Pitanje {{ questionNumber }} / {{ totalQuestions }}</span>
        <span class="progress-percent">{{ Math.round(progress) }}%</span>
      </div>
      <q-linear-progress
        :value="progress / 100"
        color="teal"
        rounded
        size="8px"
      />
    </div>

    <transition name="fade" mode="out-in">
      <div :key="question.id" class="question-content">
        <h2 class="question-text">{{ question.question }}</h2>

        <div class="options-list">
          <div
            v-for="(option, index) in question.options"
            :key="index"
            class="option-item"
            :class="getOptionClass(index)"
            :style="{ '--option-color': optionColors[index] }"
            @click="!answered && emit('select', index)"
          >
            <div class="option-letter">{{ String.fromCharCode(65 + index) }}</div>
            <div class="option-text">{{ option }}</div>
            <q-icon
              v-if="getOptionIcon(index)"
              :name="getOptionIcon(index)"
              size="24px"
              class="option-icon"
            />
          </div>
        </div>

        <transition name="slide">
          <div v-if="answered" class="explanation-box" :class="isCorrect ? 'explanation-correct' : 'explanation-wrong'">
            <div class="explanation-header">
              <q-icon :name="isCorrect ? 'emoji_events' : 'info'" size="22px" />
              <span>{{ isCorrect ? 'Točno!' : 'Netočno' }}</span>
            </div>
            <p class="explanation-text">{{ question.explanation }}</p>
          </div>
        </transition>

        <transition name="fade">
          <q-btn
            v-if="answered"
            :label="questionNumber === totalQuestions ? 'Vidi rezultat' : 'Sljedeće pitanje'"
            color="teal"
            rounded
            size="lg"
            class="next-btn"
            icon-right="arrow_forward"
            @click="emit('next')"
          />
        </transition>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.quiz-question {
  max-width: 680px;
  margin: 0 auto;
  padding: 1.5rem;
}

.progress-section {
  margin-bottom: 2rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.question-counter {
  font-size: 0.9rem;
  font-weight: 600;
  color: #37474f;
}

.progress-percent {
  font-size: 0.85rem;
  color: #78909c;
  font-weight: 500;
}

.question-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.question-text {
  font-size: 1.35rem;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
  margin: 0;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  border: 2px solid #e0e6ed;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
}

.option-item:hover:not(.correct):not(.wrong):not(.dimmed) {
  border-color: var(--option-color);
  background: color-mix(in srgb, var(--option-color) 8%, white);
  transform: translateX(4px);
}

.option-item.selected {
  border-color: var(--option-color);
  background: color-mix(in srgb, var(--option-color) 10%, white);
}

.option-item.correct {
  border-color: #43a047;
  background: #e8f5e9;
}

.option-item.wrong {
  border-color: #e53935;
  background: #ffebee;
}

.option-item.dimmed {
  opacity: 0.5;
}

.option-letter {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--option-color) 12%, white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--option-color);
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.option-item.correct .option-letter {
  background: #43a047;
  color: #fff;
}

.option-item.wrong .option-letter {
  background: #e53935;
  color: #fff;
}

.option-text {
  flex: 1;
  font-size: 1rem;
  color: #37474f;
  font-weight: 500;
}

.option-icon {
  flex-shrink: 0;
}

.option-item.correct .option-icon {
  color: #43a047;
}

.option-item.wrong .option-icon {
  color: #e53935;
}

.explanation-box {
  border-radius: 14px;
  padding: 1.25rem;
  border-left: 4px solid;
}

.explanation-correct {
  background: #e8f5e9;
  border-left-color: #43a047;
}

.explanation-wrong {
  background: #fff3e0;
  border-left-color: #e65100;
}

.explanation-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.explanation-correct .explanation-header {
  color: #2e7d32;
}

.explanation-wrong .explanation-header {
  color: #e65100;
}

.explanation-text {
  margin: 0;
  font-size: 0.95rem;
  color: #546e7a;
  line-height: 1.6;
}

.next-btn {
  align-self: center;
  min-width: 240px;
  font-weight: 600;
  margin-top: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.4s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
</style>
