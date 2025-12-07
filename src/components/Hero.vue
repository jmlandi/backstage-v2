<template>
  <section class="hero" id="hero">
    <div class="carousel">
      <!-- Carousel Slides -->
      <TransitionGroup name="slide">
        <div
          v-for="(slide, index) in slides"
          v-show="currentSlide === index"
          :key="slide.id"
          class="carousel-slide"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              :srcset="slide.imageMobile"
            />
            <img
              :src="slide.image"
              :alt="slide.artist"
              class="carousel-bg-image"
            />
          </picture>
        </div>
      </TransitionGroup>

      <!-- Navigation Dots -->
      <div class="carousel-dots">
        <button
          v-for="(slide, index) in slides"
          :key="`dot-${slide.id}`"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Navigation Arrows -->
      <button
        class="carousel-arrow carousel-arrow-prev"
        @click="previousSlide"
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        class="carousel-arrow carousel-arrow-next"
        @click="nextSlide"
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoplayInterval = null

// Sample carousel data - replace with actual data
const slides = ref([
  {
    id: 1,
    artist: 'ARTIST NAME',
    tour: 'World Tour 2025',
    date: '15 DEZ',
    location: 'São Paulo, SP',
    image: '/images/hero-1.png',
    imageMobile: '/images/hero-mobile-1.jpg'
  },
  {
    id: 2,
    artist: 'FESTIVAL DE VERÃO',
    tour: 'Summer Edition',
    date: '20 JAN',
    location: 'Rio de Janeiro, RJ',
    image: '/images/hero-2.png',
    imageMobile: '/images/hero-mobile-2.jpg'
  },
  {
    id: 3,
    artist: 'ROCK NIGHT',
    tour: 'Live Experience',
    date: '05 FEV',
    location: 'Curitiba, PR',
    image: '/images/hero-3.png',
    imageMobile: '/images/hero-mobile-3.jpg'
  }
])

/**
 * Go to next slide
 */
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  resetAutoplay()
}

/**
 * Go to previous slide
 */
const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0
    ? slides.value.length - 1
    : currentSlide.value - 1
  resetAutoplay()
}

/**
 * Go to specific slide
 * @param {number} index - Slide index
 */
const goToSlide = (index) => {
  currentSlide.value = index
  resetAutoplay()
}

/**
 * Start autoplay
 */
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // 5 seconds
}

/**
 * Stop autoplay
 */
const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

/**
 * Reset autoplay timer
 */
const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.hero {
  margin-top: var(--header-height);
  position: relative;
  overflow: hidden;
}

.carousel {
  position: relative;
  height: 60vh;
  min-height: 400px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.carousel-slide picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.carousel-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
}

.container {
  position: relative;
  z-index: 2;
}

.slide-content {
  max-width: 800px;
  color: var(--color-secondary);
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badges {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1em;
  border-radius: 4px;
}

.badge-support {
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--color-secondary);
}

.badge-tickets {
  background-color: var(--color-accent);
  color: var(--color-secondary);
}

.artist-name {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
  line-height: 1;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.tour-title {
  font-size: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-regular);
}

.event-details {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: clamp(1rem, 2vw, 1.25rem);
}

.date {
  color: var(--color-accent);
  font-weight: var(--font-weight-bold);
}

.divider {
  color: var(--color-secondary);
}

.location {
  color: var(--color-secondary);
}

/* Navigation Dots */
.carousel-dots {
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-sm);
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.dot.active {
  background-color: var(--color-accent);
  transform: scale(1.3);
}

/* Navigation Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--color-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all var(--transition-fast);
  border-radius: 50%;
  padding: 0;
}

.carousel-arrow svg {
  width: 20px;
  height: 20px;
}

.carousel-arrow:hover {
  border-color: var(--color-accent);
  background-color: rgba(203, 0, 0, 0.1);
}

.carousel-arrow:hover svg {
  stroke: var(--color-accent);
}

.carousel-arrow-prev {
  left: var(--spacing-md);
}

.carousel-arrow-next {
  right: var(--spacing-md);
}

/* Slide Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.6s ease;
}

.slide-enter-from {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}

/* Responsive */
@media (min-width: 768px) {
  .carousel {
    height: 60vh;
    min-height: 500px;
  }

  .carousel-arrow {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }

  .carousel-arrow-prev {
    left: var(--spacing-xl);
  }

  .carousel-arrow-next {
    right: var(--spacing-xl);
  }
}

@media (min-width: 1025px) {
  .carousel {
    height: 65vh;
    min-height: 550px;
  }

  .carousel-dots {
    bottom: var(--spacing-xl);
  }
}

@media (min-width: 1441px) {
  .carousel {
    height: 65vh;
    min-height: 600px;
  }
}
</style>
