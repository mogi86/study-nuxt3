<template>
  <div>
    <button @click="increase">Pinia Increase</button>
  </div>
</template>

<script lang="ts">
import {useCounterPiniaStore} from "@/store/counterPinia"

export default {
  name: "CounterPiniaIncrement",
  setup () {
    const counter = useCounterPiniaStore()

    function increase() {
      counter.increment()
    }

    return {
      increase
    }
  }
}
</script>
