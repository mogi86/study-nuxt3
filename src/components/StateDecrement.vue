<template>
  <div>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script lang="ts">
import {counterInject} from "@/store/counter"

export default {
  name: "StateDecrement",
  setup() {
    const counter = counterInject()
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
