<template>
  <v-layout
    column
    app
    class="link-area"
  >
    <template v-for="(item ,i) in links">
      <v-layout
        d-block
        row
        fill-height
        justify-center
        :key="i"
      >
        <a
          :href="item.url"
          class="link-url"
        >
          <div class="link-title mt-1">{{item.title}}</div>
        </a>
        <v-divider></v-divider>
      </v-layout>
    </template>
  </v-layout>
</template>

<style>
.link-area {
  margin-top: 10px;
  border: #00609b;
  border-style: solid;
  border-width: 1px;
  padding: 10px 10px 10px 10px;
}
.link-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #00609b;
  font-size: 16px;
}
.link-url {
  text-decoration: none;
}
.mt-1 {
  margin-top: 1px;
}
</style>
<script>
export default {
  props: {
    links: {
      type: Array,
      required: false
    }
  },

  data() {
    return {

    }
  }
}
</script>
