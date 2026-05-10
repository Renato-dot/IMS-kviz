<script setup lang="ts">
defineEmits<{ start: [] }>()
</script>

<template>
  <div class="start-screen">
    <div class="start-bg">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>

    <div class="start-content">
      <div class="hero-icon">
        <q-icon name="favorite" size="72px" color="white" />
      </div>
      <h1 class="title">Koliko znamo o svom zdravlju?</h1>
      <p class="subtitle">Testirajte svoje znanje o zdravlju, prehrani i tijelu</p>

      <div class="info-cards">
        <div class="info-card info-card-teal">
          <q-icon name="quiz" size="26px" />
          <span>10 pitanja</span>
        </div>
        <div class="info-card info-card-orange">
          <q-icon name="shuffle" size="26px" />
          <span>Nasumično odabrana</span>
        </div>
        <div class="info-card info-card-blue">
          <q-icon name="school" size="26px" />
          <span>Sa objašnjenjima</span>
        </div>
      </div>

      <q-btn
        label="Započni kviz"
        color="white"
        text-color="teal"
        size="lg"
        rounded
        class="start-btn"
        icon-right="arrow_forward"
        @click="$emit('start')"
      />
    </div>
  </div>
</template>

<style scoped>
.start-screen {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.start-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #00897b 0%, #26a69a 50%, #4db6ac 100%);
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.12;
}

.bg-circle-1 {
  width: 400px;
  height: 400px;
  background: #e65100;
  top: -120px;
  right: -80px;
}

.bg-circle-2 {
  width: 250px;
  height: 250px;
  background: #0288d1;
  bottom: -60px;
  left: -60px;
}

.bg-circle-3 {
  width: 180px;
  height: 180px;
  background: #fff;
  top: 40%;
  left: 15%;
}

.start-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

.hero-icon {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.75rem;
  line-height: 1.15;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
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
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  backdrop-filter: blur(6px);
}

.info-card-teal {
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.info-card-orange {
  background: rgba(230, 81, 0, 0.35);
  border: 1px solid rgba(230, 81, 0, 0.5);
}

.info-card-blue {
  background: rgba(2, 136, 209, 0.35);
  border: 1px solid rgba(2, 136, 209, 0.5);
}

.start-btn {
  min-width: 220px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.2);
}
</style>
