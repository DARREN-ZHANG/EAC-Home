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
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- 目的地国家 -->
    <h3 class="group-name">{{destination}}</h3>
    <countries-grid
      class="grid-area"
      :items="countries"
    >
    </countries-grid>
    <!-- 快速通道 -->
    <h3 class="group-name">{{quickentry}}</h3>
    <quick-entry
      :items="quicks"
      class="grid-area"
    ></quick-entry>
    <!-- 成功案例 -->
    <v-layout row>
      <v-flex xs10>
        <h3>成功案例</h3>
      </v-flex>
      <v-flex xs2>
        <span>更多 ></span>
      </v-flex>
    </v-layout>
    <success-examples :items="examples"></success-examples>
    <!-- 明星顾问 -->
    <v-layout row>
      <v-flex xs10>
        <h3>明星顾问</h3>
      </v-flex>
      <v-flex xs2>
        <span>更多 ></span>
      </v-flex>
    </v-layout>
    <a href="/teacher">
      <v-carousel
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
import successExamples from '~/components/successExamples.vue';


export default {
  data() {
    return {
      destination: '留学目的地',
      subjects: '热门专业',
      quickentry: '快速阅读通道',
      items: [
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
      examples: [
        {
          title: '凯斯西储大学录取案例',
          link: ''
        },
        {
          title: '布里斯托录取案例',
          link: ''
        },
        {
          title: '墨尔本大学录取案例',
          link: ''
        },
        {
          title: '帝国理工学院录取案例',
          link: ''
        },
        {
          title: '俄亥俄州立大学录取案例',
          link: ''
        },

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
      {
        page: '/quickEntries/events',
        icon: '/quick/quick_05.png',
        title: '留学活动'
      },
      {
        page: '/quickEntries/cases',
        icon: '/quick/quick_06.png',
        title: '成功案例'
      },
      {
        page: '/quickEntries/schools',
        icon: '/quick/quick_07.png',
        title: '院校库'
      },
      {
        page: '/quickEntries/product',
        icon: '/quick/quick_08.png',
        title: '留学产品'
      },
      ],

      hot_subjects: [
        {
          icon: '',
          title: '会计'
        },
        {
          icon: '',
          title: '金融'
        },
        {
          icon: '',
          title: '计算机'
        },
        {
          icon: '',
          title: '音乐'
        },
      ],
      countries: [
        {
          page: '/countries/us',
          icon: '/flags/flag_us.png',
          title: '美国'
        },
        {
          page: '/countries/uk',
          icon: '/flags/flag_uk.png',
          title: '英国'
        },
        {
          page: '',
          icon: '/flags/flag_hk.png',
          title: '香港'
        },
        {
          page: '',
          icon: '/flags/flag_si.png',
          title: '新加坡'
        },
        {
          page: '',
          icon: '/flags/flag_au.png',
          title: '澳洲'
        },
        {
          page: '',
          icon: '/flags/flag_ge.png',
          title: '德国'
        },
        {
          page: '',
          icon: '/flags/flag_nz.png',
          title: '新西兰'
        },
        {
          page: '',
          icon: '/flags/flag_ca.png',
          title: '加拿大'
        }
      ]
    }
  },

  components: {
    countriesGrid,
    quickEntry,
    successExamples,
  },

}
</script>
