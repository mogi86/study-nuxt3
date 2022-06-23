<template>
  <div>Pinia Counter Show: {{ counter.show }}</div>
</template>

<script lang="ts">
import {useCounterPiniaStore} from "@/store/counterPinia"

export default {
  name: "CounterPiniaShow",
  setup () {
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
