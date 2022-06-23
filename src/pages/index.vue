<template>
  <h1>Index page</h1>
  <!-- rendering on client side -->
  <ClientOnly>
    <client-render></client-render>
  </ClientOnly>
  <server-render></server-render>
  <state-parent></state-parent>
  <counter-pinia-parent></counter-pinia-parent>
  <standard></standard>
</template>

<script>
import ServerRender from "@/components/ServerRender.vue";
import StateParent from "@/components/StateParent.vue";
import Standard from "@/components/Standard.vue";
import ClientRender from "@/components/ClientRender";
import CounterPiniaParent from "../components/pania/CounterPiniaParent";
export default {
  components: {CounterPiniaParent, ClientRender, Standard, StateParent, ServerRender}
}

</script>
