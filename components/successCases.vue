<template>
  <v-container>
    <v-layout row>
      <v-flex xs10>
        <h2>{{$t('title.success-case')}}</h2>
      </v-flex>
      <v-flex xs2>
        <span>{{$t('title.more')}}</span>
      </v-flex>
    </v-layout>

    <v-layout column class="mt-10"> 
      <template v-for="(item,i) in items">
        <v-layout
          row
          :key="i"
          justify-center
          class="mt-1"
        >
          <v-flex xs1>
            <img src="/ic_case.png" class="case-logo">
          </v-flex>
          <v-flex xs11>
            <span class="case-title">{{item.title}}</span>
          </v-flex>
        </v-layout>
      </template>
      <v-divider class="mt-12"></v-divider>
    </v-layout>
  </v-container>
</template>

<style>
.case-title{
  font-size: 16px;
}
.mt-12{
  margin-top: 12px;
}
.case-logo {
  margin-top: 3px;
  width: 16px;
  height: 16px;
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

  })
}
</script>
