<template>
  <v-container>
    <v-layout
      row
      justify-start
      align-center
      fill-height
    >
      <h2>{{subtitle}}</h2>
    </v-layout>
    <v-layout
      class="mt-10"
      wrap
      column
    >
      <v-layout
        wrap
        row
      >
        <template v-for="(item,i) in items">
          <v-flex
            class="align-center"
            xs3
            :key="i"
          >
            <a :href="item.page">
              <img
                :src="item.icon"
                class="quick-logo"
              >
              <p>{{item.title}}</p>
            </a>
          </v-flex>
        </template>
      </v-layout>
      <v-divider class="divider"></v-divider>
    </v-layout>
  </v-container>
</template>


<style>
.quick-logo {
  width: 40px;
  height: 40px;
}
.divider {
  margin-bottom: 0px;
}
.mt-10 {
  margin-top: 10px;
}
.align-center {
  text-align: center;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
  },
  data: () => ({
    subtitle: '快速阅读通道',
  })
}
</script>
