<template>
  <div>
    <v-row justify="center" align="center" class="hero-container white">
      <v-col cols="12" sm="8" md="6">
        <hero />
      </v-col>
    </v-row>
    <review-carousel />
    <portfolio-preview />
    <process />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import ReviewCarousel from '~/components/ReviewCarousel.vue'
import PortfolioPreview from '~/components/PortfolioPreview.vue'
import Process from '~/components/Process.vue'

export default {
  components: {
    Hero,
    ReviewCarousel,
    PortfolioPreview,
    Process,
  },
}
</script>

<style lang="scss">
.hero-container {
  padding-bottom: 2rem;
  box-shadow: 0px 8px 16px -8px rgba($color: #000000, $alpha: 0.4);
  z-index: 1;
  position: relative;
}
</style>
