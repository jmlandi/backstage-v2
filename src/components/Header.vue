<template>
  <header
    :class="['header', { 'scrolled': isScrolled }]"
  >
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <a href="#" class="logo" @click.prevent="scrollToTop">
          <img src="/backstage-logo.webp" alt="Backstage Produtora" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="{ 'active': activeSection === item.id }"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="hamburger"
          :class="{ 'active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="mobile-menu">
      <nav v-if="isMobileMenuOpen" class="nav-mobile">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'active': activeSection === item.id }"
          @click="handleMobileNavClick(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { activeSection, scrollToSection } = useSmoothScroll()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'upcoming-shows', label: 'shows' },
  { id: 'about', label: 'bio' },
  { id: 'contact', label: 'contato' }
]

/**
 * Handle scroll event to add shadow to header
 */
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

/**
 * Toggle mobile menu visibility
 */
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

/**
 * Handle mobile navigation click
 * @param {string} sectionId - Section to scroll to
 */
const handleMobileNavClick = (sectionId) => {
  scrollToSection(sectionId)
  toggleMobileMenu()
}

/**
 * Scroll to top of page
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Clean up
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-primary);
  z-index: var(--z-header);
  transition: box-shadow var(--transition-normal);
  padding: var(--spacing-md) 0;
  overflow: hidden;
  border: none;
  outline: none;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: var(--spacing-md);
  max-width: 100%;
  border: none;
  outline: none;
}

.header .container {
  border: none;
  outline: none;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  z-index: calc(var(--z-header) + 2);
  flex-shrink: 0;
}

.logo img {
  height: 32px;
  width: auto;
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
  gap: var(--spacing-2xl);
  justify-content: space-evenly;
  flex: 1;
  max-width: 600px;
}

.nav-desktop a {
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  position: relative;
  padding: 0.5rem 0;
  text-transform: lowercase;
}

.nav-desktop a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-secondary);
  transition: width var(--transition-fast);
}

.nav-desktop a:hover::after,
.nav-desktop a.active::after {
  width: 100%;
}

.nav-desktop a.active {
  color: var(--color-secondary);
}

/* Hamburger Menu */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 30px;
  height: 24px;
  z-index: calc(var(--z-header) + 2);
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--color-accent);
  border-radius: 2px;
  transition: all var(--transition-normal);
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xl);
  z-index: calc(var(--z-header) + 1);
}

.nav-mobile a {
  font-weight: var(--font-weight-bold);
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  transition: all var(--transition-fast);
  text-transform: lowercase;
}

.nav-mobile a:hover,
.nav-mobile a.active {
  color: var(--color-secondary);
  transform: scale(1.1);
}

/* Mobile Menu Transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

.mobile-menu-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.mobile-menu-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Tablet and Desktop */
@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }

  .hamburger {
    display: none;
  }

  .logo img {
    height: 40px;
  }
}

@media (min-width: 1025px) {
  .nav-desktop {
    gap: var(--spacing-2xl);
  }

  .nav-desktop a {
    font-size: 1.125rem;
  }
}
</style>
