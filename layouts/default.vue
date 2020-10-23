<template>
  <v-app>
    <nav>
      <v-navigation-drawer v-model="drawer" right temporary app>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <header>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <p class="red--text call-number pl-4 pt-2">
              Call Now! 1-620-456-6789
            </p>
          </v-col>
          <v-col cols="6">
            <v-img
              class="mx-auto"
              contain
              height="120"
              max-width="120"
              src="/wolfe_customs_logo.png"
            ></v-img>
          </v-col>
          <v-col cols="3" class="f-end pr-6">
            <v-btn to="/chat" text color="blue">Chat Now</v-btn>
            <v-divider vertical class="black mr-1"></v-divider>
            <v-btn icon @click.stop="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </header>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      callNow: 'Call Now! 1-620-100-1000',
      title: 'Vuetify.js',
    }
  },
}
</script>
