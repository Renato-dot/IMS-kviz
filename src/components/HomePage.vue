<script setup lang="ts">
defineEmits<{ startQuiz: [] }>()

const healthFacts = [
  { icon: 'water_drop', color: '#0288d1', title: 'Voda je kljucna', text: 'Ljudsko tijelo je 60% vode. Vec i 2% dehidracije smanjuje kognitivne sposobnosti za 20%.' },
  { icon: 'bedtime', color: '#5e35b1', title: 'San obnavlja', text: 'Tijekom sna mozak uklanja toksine. Manje od 6 sati sna povecava rizik od srcanih bolesti za 48%.' },
  { icon: 'fitness_center', color: '#e65100', title: 'Kretanje je zivot', text: 'Samo 30 minuta hodnje dnevno smanjuje rizik od depresije za 26% i produzuje zivot za 3-5 godina.' },
  { icon: 'restaurant', color: '#2e7d32', title: 'Boja na tanjuru', text: 'Raznolika prehrana s 5 boja voca i povrca dnevno osigurava optimalan unos vitamina i minerala.' },
  { icon: 'psychology', color: '#00838f', title: 'Stres utjece na sve', text: 'Kronicni stres povecava kortizol, slabi imunitet i moze oštetiti memoriju i koncentraciju.' },
  { icon: 'favorite', color: '#c62828', title: 'Srce ne laze', text: 'Kardiovaskularne bolesti su vodeci uzrok smrti, ali 80% slucajeva se moze sprijeciti zdravim nacinom zivota.' },
]

const stats = [
  { value: '80%', label: 'bolesti se moze sprijeciti', color: '#00897b' },
  { value: '150min', label: 'tjedne aktivnosti', color: '#e65100' },
  { value: '7-9h', label: 'sna po noci', color: '#5e35b1' },
  { value: '2L', label: 'vode dnevno', color: '#0288d1' },
]
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <q-icon name="health_and_safety" size="18px" />
          <span>Zdravlje je bogatstvo</span>
        </div>
        <h1 class="hero-title">Koliko znamo<br />o svom zdravlju?</h1>
        <p class="hero-subtitle">Otkrijte koliko zapravo znate o svom tijelu, prehrani i zdravom nacinu zivota. Zanimljiva pitanja, korisna objasnjenja i mozda nesto novo naucite!</p>
        <q-btn
          label="Pokreni kviz"
          color="teal"
          size="xl"
          rounded
          class="hero-btn"
          icon-right="arrow_forward"
          @click="$emit('startQuiz')"
        />
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-card" :style="{ '--accent': stat.color }">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section class="facts-section">
      <h2 class="section-title">Zanimljivosti o zdravlju</h2>
      <p class="section-subtitle">Saznajte nesto novo prije nego sto krenete s kvizom</p>
      <div class="facts-grid">
        <div
          v-for="fact in healthFacts"
          :key="fact.title"
          class="fact-card"
          :style="{ '--card-accent': fact.color }"
        >
          <div class="fact-icon-wrap" :style="{ background: fact.color + '15' }">
            <q-icon :name="fact.icon" size="32px" :style="{ color: fact.color }" />
          </div>
          <h3 class="fact-title">{{ fact.title }}</h3>
          <p class="fact-text">{{ fact.text }}</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-card">
        <q-icon name="quiz" size="48px" color="teal" />
        <h2 class="cta-title">Spremni za izazov?</h2>
        <p class="cta-text">10 pitanja, 4 moguca odgovora, korisna objasnjenja. Testirajte svoje znanje!</p>
        <q-btn
          label="Započni kviz"
          color="teal"
          size="lg"
          rounded
          icon-right="arrow_forward"
          @click="$emit('startQuiz')"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* Hero */
.hero-section {
  position: relative;
  padding: 4rem 2rem 3rem;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(160deg, #e0f2f1 0%, #b2dfdb 40%, #80cbc4 100%);
}

.hero-bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: #00897b;
  top: -80px;
  right: -60px;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: #e65100;
  bottom: -40px;
  left: -40px;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: #0288d1;
  top: 50%;
  left: 10%;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #00695c;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #004d40;
  line-height: 1.15;
  margin: 0 0 1rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #00695c;
  line-height: 1.6;
  margin: 0 0 2rem;
  opacity: 0.85;
}

.hero-btn {
  min-width: 240px;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.3px;
}

/* Stats */
.stats-section {
  padding: 0 2rem;
  margin-top: -2rem;
  position: relative;
  z-index: 2;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto;
}

.stat-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-top: 3px solid var(--accent);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

.stat-value {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1.2;
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: #546e7a;
  margin-top: 0.3rem;
  font-weight: 500;
}

/* Facts */
.facts-section {
  padding: 3rem 2rem;
  max-width: 960px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin: 0 0 0.5rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #78909c;
  text-align: center;
  margin: 0 0 2rem;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.fact-card {
  background: #fff;
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--card-accent);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.fact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.fact-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.fact-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 0.5rem;
}

.fact-text {
  font-size: 0.9rem;
  color: #546e7a;
  line-height: 1.6;
  margin: 0;
}

/* CTA */
.cta-section {
  padding: 2rem 2rem 3rem;
}

.cta-card {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  border-radius: 24px;
  padding: 3rem 2rem;
}

.cta-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #004d40;
  margin: 1rem 0 0.5rem;
}

.cta-text {
  font-size: 1rem;
  color: #00695c;
  margin: 0 0 1.5rem;
  opacity: 0.85;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .facts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 1.25rem 2rem;
  }

  .hero-title {
    font-size: 1.7rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .stat-value {
    font-size: 1.4rem;
  }
}
</style>
