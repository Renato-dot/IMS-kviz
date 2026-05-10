<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '../data/questions'

const props = defineProps<{
  score: number
  totalQuestions: number
  quizQuestions: Question[]
  answers: (number | null)[]
}>()

const emit = defineEmits<{
  restart: []
}>()

const percentage = computed(() => Math.round((props.score / props.totalQuestions) * 100))

const resultMessage = computed(() => {
  if (percentage.value >= 90) return { title: 'Izvrsno!', subtitle: 'Pravi ste stručnjak za zdravlje!', icon: 'emoji_events', color: '#43a047' }
  if (percentage.value >= 70) return { title: 'Vrlo dobro!', subtitle: 'Imate solidno znanje o zdravlju.', icon: 'thumb_up', color: '#26a69a' }
  if (percentage.value >= 50) return { title: 'Dobro!', subtitle: 'Znanje je prosječno, ali ima prostora za napredak.', icon: 'sentiment_satisfied', color: '#fb8c00' }
  return { title: 'Moglo bi bolje!', subtitle: 'Vrijeme je za malo više brige o svom zdravlju.', icon: 'school', color: '#e53935' }
})

const resultColor = computed(() => {
  if (percentage.value >= 70) return 'teal'
  if (percentage.value >= 50) return 'orange'
  return 'red'
})
</script>

<template>
  <div class="result-screen">
    <div class="result-hero">
      <div class="result-icon-circle" :style="{ background: resultMessage.color + '18' }">
        <q-icon :name="resultMessage.icon" size="56px" :style="{ color: resultMessage.color }" />
      </div>
      <h1 class="result-title" :style="{ color: resultMessage.color }">{{ resultMessage.title }}</h1>
      <p class="result-subtitle">{{ resultMessage.subtitle }}</p>
    </div>

    <div class="score-display">
      <div class="score-circle">
        <q-circular-progress
          :value="percentage"
          size="120px"
          :color="resultColor"
          :track-color="'grey-3'"
          :thickness="0.15"
          show-value
          class="q-ma-md"
        >
          <div class="score-inner">
            <span class="score-number">{{ score }}</span>
            <span class="score-total">/ {{ totalQuestions }}</span>
          </div>
        </q-circular-progress>
      </div>
      <p class="score-label">{{ percentage }}% točnih odgovora</p>
    </div>

    <div class="answers-review">
      <h3 class="review-title">Pregled odgovora</h3>
      <div
        v-for="(q, i) in quizQuestions"
        :key="q.id"
        class="review-item"
        :class="{ 'review-correct': answers[i] === q.correctIndex, 'review-wrong': answers[i] !== q.correctIndex }"
      >
        <div class="review-header">
          <q-icon
            :name="answers[i] === q.correctIndex ? 'check_circle' : 'cancel'"
            size="20px"
            :color="answers[i] === q.correctIndex ? 'positive' : 'negative'"
          />
          <span class="review-question">{{ q.question }}</span>
        </div>
        <div class="review-details">
          <span v-if="answers[i] !== q.correctIndex" class="review-your-answer">
            Vaš odgovor: {{ answers[i] !== null ? q.options[answers[i] as number] : 'Nije odgovoreno' }}
          </span>
          <span class="review-correct-answer">
            Točan odgovor: {{ q.options[q.correctIndex] }}
          </span>
        </div>
      </div>
    </div>

    <q-btn
      label="Igraj ponovno"
      color="teal"
      rounded
      size="lg"
      class="restart-btn"
      icon="refresh"
      @click="emit('restart')"
    />
  </div>
</template>

<style scoped>
.result-screen {
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-hero {
  text-align: center;
  margin-bottom: 2rem;
}

.result-icon-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.result-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.result-subtitle {
  font-size: 1.05rem;
  color: #546e7a;
  margin: 0;
}

.score-display {
  text-align: center;
  margin-bottom: 2rem;
}

.score-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
}

.score-number {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a2e;
}

.score-total {
  font-size: 0.9rem;
  color: #78909c;
  font-weight: 500;
}

.score-label {
  font-size: 0.95rem;
  color: #546e7a;
  margin: 0.5rem 0 0;
  font-weight: 500;
}

.answers-review {
  width: 100%;
  margin-bottom: 2rem;
}

.review-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 1rem;
}

.review-item {
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 0.75rem;
  border-left: 4px solid;
}

.review-correct {
  background: #e8f5e9;
  border-left-color: #43a047;
}

.review-wrong {
  background: #ffebee;
  border-left-color: #e53935;
}

.review-header {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.review-question {
  font-size: 0.95rem;
  font-weight: 600;
  color: #37474f;
  line-height: 1.4;
}

.review-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 28px;
}

.review-your-answer {
  font-size: 0.85rem;
  color: #c62828;
}

.review-correct-answer {
  font-size: 0.85rem;
  color: #2e7d32;
  font-weight: 500;
}

.restart-btn {
  min-width: 220px;
  font-weight: 600;
  margin-bottom: 2rem;
}
</style>
