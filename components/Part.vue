<template>
  <p>Part Components!</p>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      console.log(window.innerWidth)
    })
  }
}
</script>

<style scoped>

</style>
