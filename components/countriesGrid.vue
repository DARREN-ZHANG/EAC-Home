<template>
  <v-container>
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
            <a :href="item.page">
              <img
                class="subject-icon"
                :src="item.icon"
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
.divider {
  margin-bottom: 0px;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data: () => ({

  })
}
</script>
