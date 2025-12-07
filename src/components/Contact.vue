<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">ENTRE EM <span class="accent">CONTATO</span></h2>

      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info slide-in-left">
          <div class="info-cards">
            <div class="info-card">
              <div class="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="info-text">
                <h3>EMAIL</h3>
                <a href="mailto:contato@backstageproductions.com.br">contato@backstageproductions.com.br</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-wrapper slide-in-right">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">NOME</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                :class="{ 'error': errors.name }"
                required
                minlength="3"
                @blur="validateName"
                placeholder="Seu nome completo"
              />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email">EMAIL</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :class="{ 'error': errors.email }"
                required
                @blur="validateEmail"
                placeholder="seu@email.com"
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="phone">TELEFONE</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div class="form-group">
              <label for="message">MENSAGEM</label>
              <textarea
                id="message"
                v-model="formData.message"
                :class="{ 'error': errors.message }"
                required
                rows="5"
                minlength="10"
                @blur="validateMessage"
                placeholder="Conte-nos sobre seu evento..."
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <button type="submit" class="btn-submit" :disabled="loading">
              <span v-if="!loading">ENVIAR MENSAGEM</span>
              <span v-else>ENVIANDO...</span>
            </button>

            <div v-if="submitMessage" :class="['submit-message', submitMessage.type]">
              {{ submitMessage.text }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useContact } from '../composables/useContact'

const {
  formData,
  errors,
  loading,
  submitMessage,
  validateName,
  validateEmail,
  validateMessage,
  handleSubmit
} = useContact()

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

  document.querySelectorAll('.contact .slide-in-left, .contact .slide-in-right').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.contact {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-primary);
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
  color: var(--color-accent);
  padding: 0 var(--spacing-sm);
}

.section-title .accent {
  color: var(--color-accent);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(203, 0, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  background-color: rgba(203, 0, 0, 0.05);
  border-color: rgba(203, 0, 0, 0.4);
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  background-color: rgba(203, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-wrapper svg {
  width: 20px;
  height: 20px;
  color: var(--color-accent);
  stroke: var(--color-accent);
}

.info-text h3 {
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  text-transform: lowercase;
  color: var(--color-secondary);
  margin-bottom: 0.25rem;
}

.info-text p,
.info-text a {
  font-size: 0.875rem;
  color: rgba(253, 249, 237, 0.8);
  text-decoration: none;
  line-height: 1.4;
}

.info-text a:hover {
  color: var(--color-secondary);
}

/* Social Links */
.social-links h3 {
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  text-transform: lowercase;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-md);
}

.social-icons {
  display: flex;
  gap: var(--spacing-sm);
}

.social-icons a {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(203, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: rgba(203, 0, 0, 0.1);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.social-icons svg {
  width: 20px;
  height: 20px;
  fill: var(--color-accent);
}

/* Contact Form */
.contact-form {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(203, 0, 0, 0.2);
  padding: var(--spacing-md);
  border-radius: 12px;
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  text-transform: lowercase;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm);
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(203, 0, 0, 0.2);
  border-radius: 8px;
  font-family: var(--font-family-base);
  font-size: 0.875rem;
  color: var(--color-secondary);
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(253, 249, 237, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  background-color: rgba(255, 255, 255, 0.08);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--color-accent);
}

.error-message {
  display: block;
  font-size: 0.875rem;
  color: var(--color-accent);
  margin-top: var(--spacing-xs);
}

.btn-submit {
  width: 100%;
  padding: var(--spacing-md);
  background-color: var(--color-accent);
  color: var(--color-secondary);
  border: none;
  border-radius: 8px;
  font-family: var(--font-family-base);
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  text-transform: lowercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover:not(:disabled) {
  background-color: #a00000;
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  border-radius: 8px;
  font-size: 0.875rem;
  text-align: center;
}

.submit-message.success {
  background-color: rgba(76, 175, 80, 0.2);
  color: #2e7d32;
}

.submit-message.error {
  background-color: rgba(203, 0, 0, 0.2);
  color: var(--color-accent);
}

/* Responsive */
@media (min-width: 768px) {
  .contact {
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    margin-bottom: var(--spacing-3xl);
  }

  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
  }

  .info-card {
    padding: var(--spacing-md);
    gap: var(--spacing-md);
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }

  .icon-wrapper svg {
    width: 24px;
    height: 24px;
  }

  .info-text h3 {
    font-size: 0.875rem;
  }

  .info-text p,
  .info-text a {
    font-size: 1rem;
  }

  .contact-form {
    height: 100%;
    padding: var(--spacing-xl);
  }

  .form-group {
    margin-bottom: var(--spacing-lg);
  }

  .form-group label {
    font-size: 0.875rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 1rem;
  }
}
</style>
