<template>
  <div>
    <h1 class="hero-heading red--text text--darken-4">{{ title }}</h1>
    <p class="hero-subheading black--text">{{ subheading }}</p>
    <v-container px-6>
      <v-btn block elevation="6" rounded x-large class="white green--text mb-6">
        Find Your Tile Needs
      </v-btn>
      <v-btn
        block
        elevation="6"
        rounded
        x-large
        class="red darken-4 white--text my-6"
      >
        Ready? Give Us A Call
      </v-btn>
      <v-btn
        block
        elevation="6"
        rounded
        x-large
        class="blue darken-2 white--text my-6"
      >
        Questions? Chat With Us
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Tile Installation Done the Right Way',
      subheading: `Other tile installers just aren't good enough where it matters, the details. Wolfe Custom tile has perfected our system and has the experience to pull off any design or vision with emaculate results. Just see what our clients have to say or brows our portfolio of projects. You deserve beautiful tile in any room.`,
    }
  },
}
</script>

<style lang="scss">
.hero-heading {
  font-size: 3rem;
  text-align: center;
  padding: 0.6rem 1rem;
  margin-top: 0;
}
.hero-subheading {
  padding: 0rem 2rem 2rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
