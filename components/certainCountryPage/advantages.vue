<template>
  <div>
    <h2>留学优势</h2>
    <ul>
      <li
        v-for="(item, i) in pros"
        :key="i"
      >
      {{item}}
      </li>
    </ul>

     <link-group :links="pros_links">
      </link-group>
  </div>
</template>

<script>
import linkGroup from '~/components/certainCountryPage/linkGroup.vue';

export default {
   props: {
    pros: {
      type: Array,
      required: false
    },
    pros_links:{
      type: Array,
      default:''
    }
  },
  components: {
    linkGroup,
  },
}
</script>

<style>
</style>
