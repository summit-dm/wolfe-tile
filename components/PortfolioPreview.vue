<template>
  <v-row class="portfolio-preview blue-grey lighten-1">
    <v-container class="pa-2">
      <v-item-group>
        <v-row>
          <v-col v-for="(img, i) in rowOne" :key="i" cols="4">
            <v-item>
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${img.src}`"
                height="220"
                class="rounded-lg border-accent"
                gradient="to top left, rgba(100,115,201,.4), rgba(25,32,72,.8)"
              />
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(img, i) in rowTwo" :key="i" cols="2">
            <v-item>
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${img.src}`"
                height="108"
                class="rounded-lg border-accent"
                gradient="to top left, rgba(100,115,201,.2), rgba(25,32,72,.4)"
              />
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(img, i) in rowThree" :key="i" cols="4">
            <v-item>
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${img.src}`"
                height="220"
                class="rounded-lg border-accent"
                gradient="to top left, rgba(100,115,201,.3), rgba(25,32,72,.7)"
              />
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      rowOne: [
        { src: 'backgrounds/bg.jpg' },
        { src: 'backgrounds/md.jpg' },
        { src: 'backgrounds/bg.jpg' },
      ],
      rowTwo: [
        { src: 'backgrounds/bg.jpg' },
        { src: 'backgrounds/md.jpg' },
        { src: 'backgrounds/bg.jpg' },
        { src: 'backgrounds/bg.jpg' },
        { src: 'backgrounds/md.jpg' },
        { src: 'backgrounds/bg.jpg' },
      ],
      rowThree: [
        { src: 'backgrounds/bg.jpg' },
        { src: 'backgrounds/md.jpg' },
        { src: 'backgrounds/bg.jpg' },
      ],
    }
  },
}
</script>

<style lang="scss">
.portfolio-preview {
  .border-accent {
    border: 1px solid #607d8b;
    box-shadow: 0 0 0 1px #90a4ae;
  }
}
</style>
