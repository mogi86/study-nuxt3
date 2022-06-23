<template>
  <div>
    <button @click="decrease">Pinia Decrease</button>
  </div>
</template>

<script lang="ts">
import {useCounterPiniaStore} from "@/store/counterPinia"

export default {
  name: "CounterPiniaDecrement",
  setup () {
    const counter = useCounterPiniaStore()

    function decrease() {
      counter.decrement()
    }

    return {
      decrease
    }
  }
}
</script>

<style scoped>

</style>
