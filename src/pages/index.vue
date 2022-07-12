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
  <emits-parent></emits-parent>
  <call-api></call-api>
  <call-api2></call-api2>
</template>

<script lang="ts">
import ServerRender from "@/components/ServerRender.vue";
import StateParent from "@/components/StateParent.vue";
import Standard from "@/components/Standard.vue";
import ClientRender from "@/components/ClientRender.vue";
import CounterPiniaParent from "@/components/pania/CounterPiniaParent.vue";
import EmitsParent from "@/components/emits/EmitsParent.vue";
import CallApi from "@/components/CallApi.vue";
import CallApi2 from "@/components/CallApi2.vue";
export default {
  components: {CallApi2, CallApi, EmitsParent, CounterPiniaParent, ClientRender, Standard, StateParent, ServerRender}
}

</script>
