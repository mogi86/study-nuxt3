<template>
  <counter-pinia-show></counter-pinia-show>
  <counter-pinia-increment></counter-pinia-increment>
  <counter-pinia-decrement></counter-pinia-decrement>
</template>

<script>
import CounterPiniaShow from "./CounterPiniaShow";
import CounterPiniaIncrement from "./CounterPiniaIncrement";
import CounterPiniaDecrement from "./CounterPiniaDecrement";
export default {
  name: "CounterPiniaParent",
  components: {CounterPiniaDecrement, CounterPiniaIncrement, CounterPiniaShow}
}
</script>

<style scoped>

</style>
