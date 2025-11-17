<template>
  <section class="upcoming-shows" id="upcoming-shows">
    <div class="container">
      <h2 class="section-title">PRÓXIMOS SHOWS</h2>

      <div class="shows-list">
        <div
          v-for="show in upcomingShows"
          :key="show.id"
          class="show-item"
        >
          <div class="show-image">
            <img
              :src="show.image"
              :alt="show.artist"
              loading="lazy"
              @load="handleImageLoad"
            />
          </div>

          <div class="show-info">
            <div class="show-date">{{ show.date }}</div>
            <h3 class="show-artist">{{ show.artist }}</h3>
            <p class="show-venue">{{ show.location }}</p>
          </div>

          <a
            :href="show.ticketLink"
            class="btn-tickets"
            target="_blank"
            rel="noopener noreferrer"
          >
            INGRESSOS
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Sample shows data - replace with actual API data
const upcomingShows = ref([
  {
    id: 1,
    artist: 'Jorge Aragão',
    date: '14.11',
    location: 'Live Curitiba',
    image: '/images/artist-3.jpg',
    ticketLink: '#'
  },
  {
    id: 2,
    artist: 'Ney Matogrosso',
    date: '05.12',
    location: 'Uzina Sorocaba',
    image: '/images/artist-1.webp',
    ticketLink: '#'
  },
  {
    id: 3,
    artist: 'Vanessa da Mata',
    date: '12.12',
    location: 'Campinas Hall',
    image: '/images/artist-4.jpg',
    ticketLink: '#'
  }
])

/**
 * Handle image load event for lazy loading animation
 * @param {Event} event - Load event
 */
const handleImageLoad = (event) => {
  event.target.classList.add('loaded')
}
</script>

<style scoped>
.upcoming-shows {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-primary);
}

.section-title {
  text-align: left;
  color: var(--color-accent);
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-3xl);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.shows-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.show-item {
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: var(--spacing-lg);
  align-items: center;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid rgba(203, 0, 0, 0.2);
  transition: all var(--transition-fast);
}

.show-item:hover {
  border-bottom-color: var(--color-accent);
}

.show-image {
  width: 200px;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.show-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-normal);
}

.show-item:hover .show-image img {
  transform: scale(1.05);
}

.show-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.show-date {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
}

.show-artist {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.show-venue {
  font-size: 0.875rem;
  color: var(--color-accent);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-tickets {
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: var(--color-secondary);
  font-weight: var(--font-weight-bold);
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-tickets:hover {
  background-color: var(--color-secondary);
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 767px) {
  .show-item {
    grid-template-columns: 100px 1fr;
    gap: var(--spacing-md);
  }

  .show-image {
    width: 100px;
    height: 100px;
  }

  .btn-tickets {
    grid-column: 1 / -1;
    margin-top: var(--spacing-sm);
  }

  .show-artist {
    font-size: 1.125rem;
  }

  .show-date {
    font-size: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .show-image {
    width: 150px;
    height: 150px;
  }
}
</style>
