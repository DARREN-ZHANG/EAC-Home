<template>
  <v-container>
    <v-layout row>
      <v-flex xs10>
        <h2>{{$t('title.star-mentor')}}</h2>
      </v-flex>
      <v-flex xs2>
        <span>{{$t('title.more')}}</span>
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
          src: '/sponge.jpg'
        },
        {
          src: '/peppa.jpeg'
        },
        {
          src: '/sponge.jpg'
        }
      ],
    }
  }
}
</script>

<style>
</style>
