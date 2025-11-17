import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for smooth scrolling functionality
 * Handles navigation clicks and scroll-to-section behavior
 */
export function useSmoothScroll() {
  const activeSection = ref('')

  /**
   * Scroll to a section by ID
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  /**
   * Update active section based on scroll position
   */
  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollPosition = window.scrollY + 100

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection.value = sectionId
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return {
    activeSection,
    scrollToSection
  }
}
