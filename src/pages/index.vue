<template>
  <h1>Index page</h1>
  <!-- rendering on client side -->
  <ClientOnly>
    <client-render></client-render>
  </ClientOnly>
  <server-render></server-render>
  <state-parent></state-parent>
  <standard></standard>
</template>

<script>
import ServerRender from "@/components/ServerRender.vue";
import StateParent from "@/components/StateParent.vue";
import Standard from "@/components/Standard.vue";
import ClientRender from "@/components/ClientRender";
export default {
  components: {ClientRender, Standard, StateParent, ServerRender}
}

</script>
