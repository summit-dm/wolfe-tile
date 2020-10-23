<template>
  <v-row class="cta-triple teal darken-3 pb-6">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h2>{{ title }}</h2>
          <v-divider />
        </v-col>
        <v-col v-for="(card, i) in cards" :key="i" cols="4">
          <v-card elevation="12" tile class="pa-2 mx-4 teal">
            <v-card-title class="justify-center">
              <h3>{{ card.heading }}</h3>
            </v-card-title>
            <v-card elevation="0" class="teal darken-3 pa-4 mx-4 mb-4">
              <v-img :src="`https://cdn.vuetifyjs.com/images/${card.src}`" />
              <v-card-text class="text-center">{{ card.content }}</v-card-text>
              <v-card-actions>
                <v-btn
                  :to="`${card.link}`"
                  exact
                  large
                  rounded
                  class="mx-auto px-4 teal text-center"
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-card elevation="0" color="transparent" class="my-6">
            <v-card-text class="text-subtext">{{ subText }}</v-card-text>
            <v-card-actions class="px-6">
              <v-btn block rounded xl-large class="btn-border">
                Find Your Tile Needs
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: 'Learn About Your Tile',
      cards: [
        {
          heading: 'Bathroom/Shower',
          src: 'backgrounds/bg.jpg',
          content: 'Some content will go here',
          link: 'page-template',
        },
        {
          heading: 'Tile Flooring',
          src: 'backgrounds/bg.jpg',
          content: 'Some content will go here',
          link: 'page-template',
        },
        {
          heading: 'Styles of Tile',
          src: 'backgrounds/bg.jpg',
          content: 'Some content will go here',
          link: 'page-template',
        },
      ],
      subText: 'Not quite sure what you need for your tile project?',
    }
  },
}
</script>

<style lang="scss">
.cta-triple {
  h2 {
    text-align: center;
    font-size: 3rem;
    color: white;
  }
  hr {
    max-width: 60%;
    margin: 0 auto;
    background-color: white;
  }
  .text-subtext {
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
    color: #ffffff !important;
  }
  .btn-border {
    height: 48px !important;
    background-color: #e0e0e0 !important;
    border: 2px solid #ffffff !important;
    color: #00695c !important;
    font-size: 1.3rem;
    font-weight: 700;
  }
}
</style>
