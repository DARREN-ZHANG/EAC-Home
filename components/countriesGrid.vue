<template>
  <v-container>
    <v-layout row justify-start align-center fill-height>
       <h2 class="group-name">{{subtitle}}</h2>
    </v-layout>
    <v-layout
      wrap
      column
    >
      <v-layout
        wrap
        row
      >
        <template v-for="(item,i) in items">
          <v-flex
            xs3
            :key="i"
          >
            <a :href="item.page" class="no-underline">
              <img
                class="subject-icon"
                :src="item.icon"
              >
              <p>{{item.title}}</p>
            </a>
          </v-flex>
        </template>
      </v-layout>
      <v-divider></v-divider>
    </v-layout>
  </v-container>
</template>

<style>
.no-underline{
  text-decoration: none;
}
.group-name {
  margin-bottom: 10px;
}
.subject {
  text-align: center;
}
.subject-icon {
  width: 40px;
  height: 40px;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    subtitle: '留学目的地',
  })
}
</script>
