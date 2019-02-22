<template>
  <v-layout
    column
    app
  >
    <v-carousel
      class="banner"
      :height=160
      hide-controls
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item,i) in banners"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- 目的地国家 -->
    <countries-grid
      class="grid-area"
      :items="$t('home-page.countries')"
    >
    </countries-grid>
    <!-- 快速通道 -->
    <quick-entry
      :items="$t('home-page.quick-entries')"
      class="grid-area"
    ></quick-entry>
    <!-- 成功案例 -->
    <success-cases :items="$t('home-page.admissionCases')"></success-cases>
    <!-- 明星顾问 -->
    <star-mentor></star-mentor>
  </v-layout>
</template>

<style>
.grid-area {
  text-align: center;
}
.banner {
  margin-bottom: 15px;
}
</style>


<script>
import countriesGrid from '~/components/countriesGrid.vue';
import quickEntry from '~/components/quickEntry.vue';
import successCases from '~/components/successCases.vue';
import starMentor from '~/components/starMentor.vue';

export default {

  components: {
    countriesGrid,
    quickEntry,
    successCases,
    starMentor
  },

  data() {
    return {
      banners: [
        {
          src: '/banner/banner-01.jpeg'
        },
        {
          src: '/banner/banner-02.jpeg'
        },
        {
          src: '/banner/banner-03.jpeg'
        },
        {
          src: '/banner/banner-04.jpeg'
        }
      ],
    }
  },
}
</script>
