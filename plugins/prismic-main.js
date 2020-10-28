import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from '~/plugins/link-resolver'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
})
