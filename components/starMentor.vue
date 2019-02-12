<template>
  <v-container>
    <v-layout row>
      <v-flex xs10>
        <h2>明星顾问</h2>
      </v-flex>
      <v-flex xs2>
        <span>更多 ></span>
      </v-flex>
    </v-layout>

    <a href="/teacher">
      <v-carousel
        class="mt-10"
        :height=180
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        >
        </v-carousel-item>
      </v-carousel>
    </a>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '/peppa.jpeg'
        },
        {
          src: '/peppa.jpeg'
        },
        {
          src: '/peppa.jpeg'
        },
        {
          src: '/peppa.jpeg'
        }
      ],
    }
  }
}
</script>

<style>
</style>
