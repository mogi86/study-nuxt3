<template>
  <div>
    <button @click="increase">Increase</button>
  </div>
</template>

<script lang="ts">
import {counterInject} from "@/store/counter";

export default {
  name: "StateIncrement",
  setup() {
    const counter = counterInject()

    function increase() {
      counter.increment()
    }

    return {
      increase
    }
  }
}
</script>

<style scoped>

</style>
