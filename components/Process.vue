<template>
  <v-row justify="center" class="process py-4">
    <v-col cols="12" class="pt-6">
      <h2>{{ title }}</h2>
      <v-divider class="black small-divider" />
    </v-col>
    <v-container class="px-6">
      <v-row v-for="(process, i) in processes" :key="i">
        <v-col v-if="i === 0" cols="6" offset="1" class="px-6">
          <h3>{{ process.heading }}</h3>
          <v-divider class="black" />
          <p class="ml-6 pl-4 text-right">{{ process.content }}</p>
        </v-col>
        <v-col v-if="i === 0" cols="4">
          <v-img
            :src="`https://cdn.vuetifyjs.com/images/${process.src}`"
            height="260"
            class="rounded-lg"
          />
        </v-col>
        <v-col v-if="i === 1" cols="4" offset="1" class="pt-6 mt-6">
          <v-img
            :src="`https://cdn.vuetifyjs.com/images/${process.src}`"
            height="260"
            class="rounded-lg"
          />
        </v-col>
        <v-col v-if="i === 1" cols="6" class="px-6 pt-6 mt-6">
          <h3>{{ process.heading }}</h3>
          <v-divider class="black" />
          <p class="ml-6 pl-4">{{ process.content }}</p>
        </v-col>
        <v-col v-if="i === 2" cols="6" offset="1" class="px-6 pt-6 mt-6">
          <h3>{{ process.heading }}</h3>
          <v-divider class="black" />
          <p class="ml-6 pl-4 text-right">{{ process.content }}</p>
        </v-col>
        <v-col v-if="i === 2" cols="4" class="pt-6 mt-6">
          <v-img
            :src="`https://cdn.vuetifyjs.com/images/${process.src}`"
            height="260"
            class="rounded-lg"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: 'Our Process',
      processes: [
        {
          heading: '1. Your Tile Needs',
          content: 'Some content will go here.',
          src: 'backgrounds/bg-2.jpg',
        },
        {
          heading: '2. Design & Estimate',
          content: 'Some content will go here.',
          src: 'backgrounds/bg.jpg',
        },
        {
          heading: '3. Scheduling',
          content: 'Some content will go here.',
          src: 'backgrounds/md.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.process {
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 300;
  }
  .small-divider {
    max-width: 60%;
    margin: 1rem auto;
  }
  .text-right {
    text-align: right;
  }
}
</style>
