import { onMounted, onUnmounted } from 'vue'

/**
 * Composable for scroll-triggered animations using IntersectionObserver
 * Provides performance-optimized animations for elements entering viewport
 */
export function useScrollAnimations() {
  let observer = null

  /**
   * Initialize IntersectionObserver for scroll animations
   */
  const initScrollAnimations = () => {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Optionally unobserve after animation
          observer.unobserve(entry.target)
        }
      })
    }, options)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right'
    )

    animatedElements.forEach(el => observer.observe(el))
  }

  /**
   * Clean up observer on component unmount
   */
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
    }
  }

  onUnmounted(cleanup)

  return {
    initScrollAnimations,
    cleanup
  }
}
