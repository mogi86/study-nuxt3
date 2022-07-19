<template>
  <div>Pinia Counter Show (Client Side Rendering): {{ counter.show }}</div>
</template>

<script lang="ts">
import {useCounterPiniaStore} from "@/store/counterPinia"

export default {
  name: "CounterPiniaShowClient",
  setup () {
    console.log('CounterPiniaShowClient client=', process.client, 'server=', process.server)
    const counter = useCounterPiniaStore()

    return {
      // ref: https://pinia.vuejs.org/core-concepts/getters.html
      counter
    }
  }
}
</script>

<style scoped>

</style>
