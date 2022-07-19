<template>
  <ClientOnly>
    <counter-pinia-show-client></counter-pinia-show-client>
  </ClientOnly>
  <counter-pinia-show></counter-pinia-show>
  <counter-pinia-increment></counter-pinia-increment>
  <counter-pinia-decrement></counter-pinia-decrement>
</template>

<script>
import CounterPiniaShow from "./CounterPiniaShow";
import CounterPiniaIncrement from "./CounterPiniaIncrement";
import CounterPiniaDecrement from "./CounterPiniaDecrement";
import CounterPiniaShowClient from "@/components/pania/CounterPiniaShowClient";
export default {
  name: "CounterPiniaParent",
  components: {CounterPiniaShowClient, CounterPiniaDecrement, CounterPiniaIncrement, CounterPiniaShow},
  setup () {
    console.log('CounterPiniaParent client=', process.client, 'server=', process.server)
  }
}
</script>

<style scoped>

</style>
