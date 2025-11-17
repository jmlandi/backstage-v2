<template>
  <section class="bio" id="bio">
    <div class="container">
      <h2 class="section-title fade-in">NOSSA HISTÓRIA</h2>

      <div class="timeline">
        <div
          v-for="milestone in milestones"
          :key="milestone.id"
          class="timeline-item fade-in"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="year">{{ milestone.year }}</div>
            <h3 class="milestone-title">{{ milestone.title }}</h3>
            <p class="milestone-description">{{ milestone.description }}</p>
            <div v-if="milestone.image" class="milestone-image">
              <img
                :src="milestone.image"
                :alt="milestone.title"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="team-section fade-in">
        <h3 class="subsection-title">NOSSO TIME</h3>
        <div class="team-grid">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="team-card"
          >
            <div class="team-image">
              <img
                :src="member.photo"
                :alt="member.name"
                loading="lazy"
              />
              <div class="team-overlay">
                <p class="team-bio">{{ member.bio }}</p>
              </div>
            </div>
            <h4 class="team-name">{{ member.name }}</h4>
            <p class="team-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Timeline milestones
const milestones = ref([
  {
    id: 1,
    year: '2010',
    title: 'O Começo',
    description: 'Fundação da Backstage com o objetivo de revolucionar a produção de eventos musicais no Brasil.',
    image: '/images/milestone-1.jpg'
  },
  {
    id: 2,
    year: '2013',
    title: 'Primeiro Grande Festival',
    description: 'Produção do primeiro festival de grande porte, reunindo mais de 50 mil pessoas em três dias de evento.',
    image: '/images/milestone-2.jpg'
  },
  {
    id: 3,
    year: '2016',
    title: 'Expansão Nacional',
    description: 'Abertura de escritórios em cinco capitais brasileiras, expandindo nossa atuação por todo o país.',
    image: '/images/milestone-3.jpg'
  },
  {
    id: 4,
    year: '2019',
    title: 'Shows Internacionais',
    description: 'Início das parcerias com artistas internacionais, trazendo grandes nomes da música mundial ao Brasil.',
    image: '/images/milestone-4.jpg'
  },
  {
    id: 5,
    year: '2023',
    title: 'Inovação Digital',
    description: 'Implementação de tecnologia de ponta para experiências híbridas e streaming de alta qualidade.',
    image: '/images/milestone-5.jpg'
  },
  {
    id: 6,
    year: '2025',
    title: 'Futuro Sustentável',
    description: 'Compromisso com eventos carbono neutro e práticas sustentáveis em todas as produções.',
    image: '/images/milestone-6.jpg'
  }
])

// Team members
const teamMembers = ref([
  {
    id: 1,
    name: 'Ana Silva',
    role: 'CEO & Founder',
    photo: '/images/team-1.jpg',
    bio: 'Visionária por trás da Backstage, com mais de 20 anos de experiência em produção de eventos.'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Diretor de Produção',
    photo: '/images/team-2.jpg',
    bio: 'Especialista em logística de grandes eventos, garante que tudo saia perfeito nos bastidores.'
  },
  {
    id: 3,
    name: 'Marina Costa',
    role: 'Gerente de Marketing',
    photo: '/images/team-3.jpg',
    bio: 'Criativa e estratégica, responsável por transformar eventos em experiências memoráveis.'
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    role: 'Diretor Técnico',
    photo: '/images/team-4.jpg',
    bio: 'Guru da tecnologia, implementa soluções inovadoras em áudio, vídeo e iluminação.'
  }
])
</script>

<style scoped>
.bio {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    #0a0a0a
  );
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-3xl);
  letter-spacing: 0.05em;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background-color: var(--color-accent);
  margin: var(--spacing-md) auto 0;
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto var(--spacing-3xl);
  padding-left: var(--spacing-lg);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--color-accent),
    transparent
  );
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-3xl);
  padding-left: var(--spacing-xl);
}

.timeline-marker {
  position: absolute;
  left: -9px;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: var(--color-accent);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  z-index: 2;
}

.timeline-content {
  background-color: rgba(253, 249, 237, 0.05);
  padding: var(--spacing-lg);
  border-radius: 8px;
  border-left: 3px solid var(--color-accent);
}

.year {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
}

.milestone-title {
  font-size: 1.5rem;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
}

.milestone-description {
  color: rgba(253, 249, 237, 0.8);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

.milestone-image {
  margin-top: var(--spacing-md);
  border-radius: 8px;
  overflow: hidden;
}

.milestone-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-slow);
}

.timeline-item:hover .milestone-image img {
  transform: scale(1.05);
}

/* Team Section */
.team-section {
  margin-top: var(--spacing-3xl);
}

.subsection-title {
  text-align: center;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-2xl);
  letter-spacing: 0.05em;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  background-color: rgba(253, 249, 237, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: all var(--transition-normal);
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(203, 0, 0, 0.3);
}

.team-image {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.team-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.9)
  );
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-lg);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.team-card:hover .team-overlay {
  opacity: 1;
}

.team-card:hover .team-image img {
  transform: scale(1.1);
}

.team-bio {
  color: var(--color-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.team-name {
  padding: var(--spacing-md) var(--spacing-lg) var(--spacing-xs);
  font-size: 1.25rem;
  color: var(--color-secondary);
  margin: 0;
}

.team-role {
  padding: 0 var(--spacing-lg) var(--spacing-md);
  font-size: 1rem;
  color: var(--color-accent);
  margin: 0;
}

/* Responsive */
@media (min-width: 768px) {
  .timeline {
    padding-left: var(--spacing-2xl);
  }

  .timeline-item {
    padding-left: var(--spacing-2xl);
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
