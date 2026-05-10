<script setup lang="ts">
defineEmits<{ start: [] }>()
</script>

<template>
  <div class="start-screen">
    <div class="hero-icon">
      <q-icon name="favorite" size="80px" color="teal" />
    </div>
    <h1 class="title">Koliko znamo o svom zdravlju?</h1>
    <p class="subtitle">Testirajte svoje znanje o zdravlju i tijelu</p>

    <div class="info-cards">
      <div class="info-card">
        <q-icon name="quiz" size="28px" color="teal-6" />
        <span>10 pitanja</span>
      </div>
      <div class="info-card">
        <q-icon name="shuffle" size="28px" color="teal-6" />
        <span>Nasumično odabrana</span>
      </div>
      <div class="info-card">
        <q-icon name="school" size="28px" color="teal-6" />
        <span>Sa objašnjenjima</span>
      </div>
    </div>

    <q-btn
      label="Započni kviz"
      color="teal"
      size="lg"
      rounded
      class="start-btn"
      icon-right="arrow_forward"
      @click="$emit('start')"
    />
  </div>
</template>

<style scoped>
.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
  text-align: center;
}

.hero-icon {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.1rem;
  color: #5a6a7a;
  margin: 0 0 2.5rem;
}

.info-cards {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5f7fa;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 0.95rem;
  color: #37474f;
  font-weight: 500;
}

.start-btn {
  min-width: 220px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
