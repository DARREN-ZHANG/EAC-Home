<template>
  <div>
    <country-summary-top>
    </country-summary-top>
    <v-container>
      <!-- 留学优势 -->
      <pros :pros="pros_detail" :pros_links="pros_links"></pros>
      <v-divider></v-divider>
      <fee></fee>
      <v-divider></v-divider>
      <apply-strategy></apply-strategy>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<style>
</style>
<script>
import pros from '~/components/certainCountryPage/advantages.vue';
import applyStrategy from '~/components/certainCountryPage/applyStrategy.vue';
import fee from '~/components/certainCountryPage/fee.vue';
import countrySummaryTop from '~/components/countrySummaryTop.vue'
export default {
  components: {
    countrySummaryTop,
    pros,
    fee,
    applyStrategy,
  },

  data() {
    return {
      pros_detail: [
        '教育质量好，学历含金量高',
        '教育资源丰富，适合不同类型的学生',
        '丰富的奖学金资源',
        '职业发展机会众多',
      ],
      pros_links: [
        {
          url: 'https://m.eic.org.cn/News/Detail/tQoJmpJRZ0mOXgHpP2qbhQ',
          title: '2019年QS世界大学排名出炉了！麻省理工连续七年夺冠'
        },
        {
          url: 'https://m.eic.org.cn/News/Detail/TH4SJOQgxUK6I33Y3svCFg',
          title: '美国留学优势及申请指南'
        },
        {
          url: 'https://m.eic.org.cn/News/Detail/7fbzNKWR8EicInk2VCv2DQ',
          title: '2019年美国找工作新趋势'
        },
        {
          url: 'https://m.eic.org.cn/News/Detail/374cH3vc60G1XlxVlb-g0g',
          title: '2018年年美国留学新政盘点'
        },
        {
          url: 'https://m.eic.org.cn/News/Detail/fmYyyigAAUmC6P254OMS3Q',
          title: '美国10大名校2018年录取率'
        },

      ],
    }
  }
}
</script>
