<template>
  <p>ServerRender Components!</p>
  <p>{{ hello('Japan') }}</p>
  <p>{{ instance.introduce() }}</p>
</template>

<script lang="ts">

import {onMounted} from "vue";
import {useRuntimeConfig} from "#app";
import {useNuxtApp} from "#app"

export default {
  name: "ServerRender",
  setup () {
    const hello = useNuxtApp().$hello
    const human = useNuxtApp().$human
    const instance = new human('John', 25)

    const runtimeConfig = useRuntimeConfig()

    console.log('runtimeConfig', runtimeConfig)
    // `apiSecret` is allowed to show on only server side. Therefore, it isn't able to be output on client side console.
    console.log('apiSecret: ', runtimeConfig.apiSecret)
    console.log('public.apiBase: ', runtimeConfig.public.apiBase)

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
