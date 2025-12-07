<template>
  <section class="upcoming-shows" id="upcoming-shows">
    <div class="container">
      <div class="shows-grid">
        <!-- Fixed Header Column (Desktop Only) -->
        <div class="shows-header">
          <h2 class="section-title">PRÓXIMOS SHOWS</h2>
        </div>

        <!-- Shows List with Images and Info -->
        <div class="shows-content">
          <div
            v-for="show in sortedShows"
            :key="show.id"
            class="show-item"
          >
            <!-- Artist Image Column -->
            <div class="show-image">
              <img
                :src="show.image"
                :alt="show.artist"
                loading="lazy"
                @load="handleImageLoad"
              />
            </div>

            <!-- Show Info Column -->
            <div class="show-info">
              <div class="show-date">{{ show.date }}</div>
              <h3 class="show-artist">{{ show.artist }}</h3>
              <p class="show-venue">{{ show.location }}</p>
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Sample shows data - replace with actual API data
const upcomingShows = ref([
  {
    id: 1,
    artist: 'Jorge Aragão',
    date: '14.11',
    location: 'Live Curitiba',
    image: '/images/artist-3.jpg',
    ticketLink: '#',
    sortDate: new Date(2024, 10, 14) // November 14, 2024
  },
  {
    id: 2,
    artist: 'Ney Matogrosso',
    date: '05.12',
    location: 'Uzina Sorocaba',
    image: '/images/artist-1.webp',
    ticketLink: '#',
    sortDate: new Date(2024, 11, 5) // December 5, 2024
  },
  {
    id: 3,
    artist: 'Vanessa da Mata',
    date: '12.12',
    location: 'Campinas Hall',
    image: '/images/artist-4.jpg',
    ticketLink: '#',
    sortDate: new Date(2024, 11, 12) // December 12, 2024
  }
])

/**
 * Sort shows chronologically from earliest to latest
 */
const sortedShows = computed(() => {
  return [...upcomingShows.value].sort((a, b) => a.sortDate - b.sortDate)
})

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

/* Mobile Layout */
.shows-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.shows-header {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  text-align: left;
  color: var(--color-accent);
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
}

.shows-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.show-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid rgba(203, 0, 0, 0.2);
  transition: all var(--transition-fast);
}

.show-item:hover {
  border-bottom-color: var(--color-accent);
}

.show-image {
  width: 100px;
  height: 100px;
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
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
}

.show-artist {
  font-size: 1.125rem;
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
  margin-bottom: var(--spacing-sm);
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
  width: fit-content;
}

.btn-tickets:hover {
  background-color: var(--color-secondary);
  color: var(--color-accent);
}

/* Tablet Layout */
@media (min-width: 768px) {
  .show-item {
    grid-template-columns: 150px 1fr;
  }

  .show-image {
    width: 150px;
    height: 150px;
  }

  .show-artist {
    font-size: 1.5rem;
  }

  .show-date {
    font-size: 1.25rem;
  }

  .show-venue {
    font-size: 0.875rem;
  }
}

/* Desktop 3-Column Layout */
@media (min-width: 1025px) {
  .shows-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: var(--spacing-3xl);
    align-items: start;
  }

  .shows-header {
    position: sticky;
    top: calc(var(--header-height) + var(--spacing-xl));
    margin-bottom: 0;
  }

  .section-title {
    font-size: 3rem;
  }

  .shows-content {
    gap: var(--spacing-2xl);
  }

  .show-item {
    grid-template-columns: 200px 1fr;
    gap: var(--spacing-xl);
    padding: var(--spacing-lg) 0;
  }

  .show-image {
    width: 200px;
    height: 200px;
  }

  .show-info {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto auto;
    align-items: start;
    gap: var(--spacing-xs) var(--spacing-lg);
  }

  .show-date {
    grid-column: 1;
    grid-row: 1;
    font-size: 1.25rem;
  }

  .show-artist {
    grid-column: 1;
    grid-row: 2;
    font-size: 1.5rem;
  }

  .show-venue {
    grid-column: 1;
    grid-row: 3;
    margin-bottom: 0;
  }

  .btn-tickets {
    grid-column: 2;
    grid-row: 1 / 4;
    align-self: center;
  }
}
</style>
