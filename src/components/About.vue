<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <!-- Text Content -->
        <div class="about-content fade-in">
          <h2 class="section-title">
            <span class="accent">CRIANDO MOMENTOS ÚNICOS</span>
          </h2>

          <p class="about-text">
            A Backstage Productions nasceu da paixão pela música e pela criação de experiências que conectam pessoas. Há mais de 15 anos, trabalhamos incansavelmente para transformar ideias em eventos memoráveis.
          </p>

          <p class="about-text">
            Nossa equipe especializada cuida de cada detalhe, desde a concepção até a execução, garantindo que cada evento seja uma experiência única e inesquecível para artistas e público.
          </p>

          <ul class="features-list">
            <li class="feature-item">
              <div class="check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Produção completa de eventos</span>
            </li>
            <li class="feature-item">
              <div class="check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Curadoria artística especializada</span>
            </li>
            <li class="feature-item">
              <div class="check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Gestão completa de artistas</span>
            </li>
          </ul>
        </div>

        <!-- Image -->
        <div class="about-image fade-in">
          <img
            src="/images/backstage-hero-theater.webp"
            alt="Equipe Backstage"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.about .fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.about {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-primary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Text Content */
.about-content {
  color: var(--color-secondary);
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
  color: var(--color-secondary);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.section-title .accent {
  color: var(--color-accent);
}

.about-text {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(253, 249, 237, 0.7);
  margin-bottom: var(--spacing-md);
}

.features-list {
  list-style: none;
  padding: 0;
  margin-top: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: rgba(253, 249, 237, 0.7);
}

.check-icon {
  width: 24px;
  height: 24px;
  background-color: rgba(203, 0, 0, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 4px;
}

.check-icon svg {
  width: 16px;
  height: 16px;
  color: var(--color-accent);
  stroke: var(--color-accent);
}

/* Image */
.about-image {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(203, 0, 0, 0.2);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  opacity: 0.8 !important;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.about-image:hover img {
  opacity: 1 !important;
  transform: scale(1.02);
}

/* Responsive */
@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
  }

  .about-image img {
    height: 100%;
    min-height: 400px;
  }
}
</style>
