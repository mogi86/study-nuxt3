<template>
  <server-render></server-render>
  <state-view></state-view>
  <state-increment></state-increment>
  <state-decrement></state-decrement>
</template>

<script lang="ts">
import {counterProvide} from "@/store/counter";
import ServerRender from "@/components/ServerRender.vue";
import StateIncrement from "@/components/StateIncrement.vue";
import StateDecrement from "@/components/StateDecrement.vue";
import StateView from "@/components/StateView.vue";

export default {
  name: "StateParent",
  components: {StateView, StateDecrement, StateIncrement, ServerRender},
  setup() {
    counterProvide()
  }
}
</script>

<style scoped>

</style>
