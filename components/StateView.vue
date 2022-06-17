<template>
  <div>Current Count: {{ counter.state.count }}</div>
</template>

<script lang="ts">
import {counterInject} from "~/store/counter";

export default {
  name: "StateView",
  setup() {
    const counter = counterInject()

    return {
      counter
    }
  }
}
</script>

<style scoped>

</style>
