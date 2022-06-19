<template>
  <p>ServerRender Components!</p>
  <p>{{ hello('Japan') }}</p>
  <p>{{ instance.introduce() }}</p>
</template>

<script>

import {onMounted} from "vue";
import {useNuxtApp} from "nuxt/app";

export default {
  name: "ServerRender",
  setup () {
    const hello = useNuxtApp().$hello
    const human = useNuxtApp().$human
    const instance = new human('John', 25)

    console.log('called from server side')
    onMounted(() => {
      console.log('called from client side')
      localStorage.getItem('test')
    })

    return {
      hello,
      instance
    }
  }
}
</script>

<style scoped>

</style>
