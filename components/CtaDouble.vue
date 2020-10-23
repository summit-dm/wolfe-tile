<template>
  <v-row justify="center" class="cta-double grey lighten-3 py-6">
    <v-col cols="12">
      <h3>{{ title }}</h3>
      <v-divider class="divider-centered"></v-divider>
    </v-col>
    <v-col cols="4">
      <v-icon size="120" color="indigo darken-4" class="d-flex my-6">
        mdi-cellphone-iphone
      </v-icon>
      <p>{{ textOne }}</p>
      <v-btn xl-large block rounded class="my-6 btn-border">
        Click To Call
      </v-btn>
    </v-col>
    <v-divider class="indigo darken-4 mx-4" vertical></v-divider>
    <v-col cols="4">
      <v-icon size="120" color="indigo darken-4" class="d-flex my-6">
        mdi-facebook-messenger
      </v-icon>
      <p>{{ textTwo }}</p>
      <v-btn xl-large block rounded class="my-6 btn-border">
        Chat On Messenger
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ready To Talk Right Now?',
      textOne: `We'd be happy to talk about your tile needs over the phone. Most calls take 15 minutes or less.`,
      textTwo:
        'We can also chat through Facebook Messenger if you prefer or if it is after normal business hours.',
    }
  },
}
</script>

<style lang="scss">
.cta-double {
  h3 {
    font-size: 2.4rem;
    color: #1a237e;
    text-align: center;
  }
  .divider-centered {
    background-color: #1a237e;
    max-width: 60%;
    margin: 1rem auto;
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;
    color: #1a237e;
  }
  .btn-border {
    border: 2px solid #ffffff !important;
    background-color: #1a237e !important;
    height: 48px !important;
    font-size: 1.1rem;
  }
}
</style>
