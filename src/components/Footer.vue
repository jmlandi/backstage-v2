<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo & Description -->
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/backstage-logo.webp" alt="Backstage Produtora" />
          </div>
          <p class="footer-tagline">
            entretenimento premium ao vivo
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">links rápidos</h3>
          <nav class="footer-nav">
            <a href="#hero" @click.prevent="scrollToSection('hero')">home</a>
            <a href="#upcoming-shows" @click.prevent="scrollToSection('upcoming-shows')">shows</a>
            <a href="#about" @click.prevent="scrollToSection('about')">bio</a>
            <a href="#contact" @click.prevent="scrollToSection('contact')">contato</a>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-title">contato</h3>
          <div class="footer-contacts">
            <a href="mailto:contato@backstageproductions.com.br">contato@backstageproductions.com.br</a>
            <a href="tel:+5511999997777">+55 (11) 9 9999-7777</a>
            <p>Rua dos Artistas, 456</p>
            <p>Vila Madalena - São Paulo/SP</p>
          </div>
        </div>

        <!-- Social Media -->
        <!-- <div class="footer-section">
          <h3 class="footer-title">redes sociais</h3>
          <div class="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div> -->
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Backstage Produtora de Eventos. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  border-top: 2px solid var(--color-accent);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-logo img {
  height: 50px;
  width: auto;
}

.footer-tagline {
  color: rgba(253, 249, 237, 0.7);
  font-size: 0.875rem;
  margin: 0;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-nav a {
  color: rgba(253, 249, 237, 0.8);
  font-size: 0.9375rem;
  transition: all var(--transition-fast);
}

.footer-nav a:hover {
  color: var(--color-accent);
  padding-left: var(--spacing-xs);
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-contacts a,
.footer-contacts p {
  color: rgba(253, 249, 237, 0.8);
  font-size: 0.9375rem;
  margin: 0;
}

.footer-contacts a:hover {
  color: var(--color-accent);
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
}

.footer-social a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(253, 249, 237, 0.1);
  border-radius: 50%;
  color: var(--color-secondary);
  transition: all var(--transition-fast);
}

.footer-social a:hover {
  background-color: var(--color-accent);
  transform: translateY(-5px);
}

.footer-social svg {
  width: 20px;
  height: 20px;
}

.footer-bottom {
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(253, 249, 237, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  text-align: center;
}

.footer-bottom p {
  color: rgba(253, 249, 237, 0.6);
  font-size: 0.875rem;
  margin: 0;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
}

.footer-legal a {
  color: rgba(253, 249, 237, 0.6);
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--color-accent);
}

.footer-legal .divider {
  color: rgba(253, 249, 237, 0.3);
}

/* Responsive */
@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 1025px) {
  .footer-content {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
