<template>
  <emits-children @customSubmit="parentSubmit"></emits-children>
</template>

<script lang="ts">
import EmitsChildren from "@/components/emits/EmitsChildren.vue";
export default {
  name: "EmitsParent",
  components: {EmitsChildren},
  setup () {
    function parentSubmit () {
      console.log('parentSubmit is called')
    }

    return {
      parentSubmit
    }
  }
}
</script>

<style scoped>

</style>
