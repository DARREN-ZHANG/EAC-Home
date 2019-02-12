<template>
  <v-layout
    column
    app
  >
    <!-- 顶部banner -->
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

    <!-- 快速通道 -->
    <quick-entry
      :items="quicks"
      class="grid-area"
    ></quick-entry>

  </v-layout>
</template>

<style>
</style>
<script>
import quickEntry from '~/components/quickEntry.vue';

export default {
  props: {
    content: {
      type: Object,
      required: false
    }
  },

  components: {
    quickEntry,
  },
  data() {
    return {
      pros_links: [
        {
          url: '',
          title: ''
        }
      ],
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
      quicks: [{
        page: '/quickEntries/plan',
        icon: '/quick/quick_01.png',
        title: '留学规划'
      },
      {
        page: '/quickEntries/fee',
        icon: '/quick/quick_02.png',
        title: '留学费用'
      },
      {
        page: '/quickEntries/ranking',
        icon: '/quick/quick_03.png',
        title: '大学排名'
      },
      {
        page: '/quickEntries/applyConditions',
        icon: '/quick/quick_04.png',
        title: '申请条件'
      },
      ]
    }
  }
}
</script>
