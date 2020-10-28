<template>
  <div>
    <v-row justify="center" align="center" class="hero-container">
      <v-col cols="12" sm="8" md="6">
        <hero :title="heroButtons" :subheading="heroSubHead" />
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
export default {
  async asyncData({ $prismic, error }) {
    /* eslint-disable no-console */
    try {
      const doc = (await $prismic.api.getSingle('home_page')).data
      console.info('Got docs')
      return {
        doc,
        heroTitle: $prismic.asText(doc.hero_title),
        heroSubHead: $prismic.asText(doc.hero_subheading),
        heroButtons: $prismic.asText(doc.body[0].primary.button_label),
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
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
