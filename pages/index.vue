<template>
  <div>
    <v-row justify="center" align="center" class="hero-container">
      <v-col cols="12" sm="8" md="6">
        <hero />
      </v-col>
    </v-row>
    <review-carousel />
    <portfolio-preview />
    <process />
    <cta-triple />
    <cta-double />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import ReviewCarousel from '~/components/ReviewCarousel.vue'
import PortfolioPreview from '~/components/PortfolioPreview.vue'
import Process from '~/components/Process.vue'
import CtaTriple from '~/components/CtaTriple.vue'
import CtaDouble from '~/components/CtaDouble.vue'

export default {
  components: {
    Hero,
    ReviewCarousel,
    PortfolioPreview,
    Process,
    CtaTriple,
    CtaDouble,
  },
}
</script>

<style lang="scss">
.hero-container {
  padding-bottom: 2rem;
  box-shadow: 0px 8px 16px -8px rgba($color: #000000, $alpha: 0.4);
  z-index: 1;
  position: relative;
  padding-top: 156px;
  background-image: linear-gradient(
      to bottom,
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url('https://source.unsplash.com/6TY_WrJTwSI/1600x900');
}
</style>
