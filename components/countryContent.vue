<template>
  <div>
      {{content.message}}
  </div>
</template>

<style>
</style>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
}
</script>
