<template>
  <v-container>
    <v-layout column>
      <template v-for="(item,i) in items">
        <v-layout
          row
          :key="i"
        >
          <v-flex xs1>
            <img src="/ic_case.png" class="case-logo">
          </v-flex>
          <v-flex xs11>
            <span>{{item.title}}</span>
          </v-flex>
        </v-layout>
      </template>
      <v-divider></v-divider>
    </v-layout>
  </v-container>
</template>

<style>
.case-logo {
  width: 15px;
  height: 15px;
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
