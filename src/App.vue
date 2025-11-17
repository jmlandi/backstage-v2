<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <UpcomingShows />
      <About />
      <!-- <Bio /> -->
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import UpcomingShows from './components/UpcomingShows.vue'
import About from './components/About.vue'
// import Bio from './components/Bio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useScrollAnimations } from './composables/useScrollAnimations'

// Initialize scroll animations
const { initScrollAnimations } = useScrollAnimations()

onMounted(() => {
  initScrollAnimations()
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
