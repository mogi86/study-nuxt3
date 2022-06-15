<template>
  <p>ServerRender Components!</p>
</template>

<script>

import {onMounted} from "vue";

export default {
  name: "ServerRender",
  setup () {
    console.log('called from server side')
    onMounted(() => {
      console.log('called from client side')
      localStorage.getItem('test')
    })
  }
}
</script>

<style scoped>

</style>
