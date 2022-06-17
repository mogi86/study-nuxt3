<template>
  <h1>Index page</h1>
  <!-- rendering on client side -->
  <ClientOnly>
    <client-render></client-render>
  </ClientOnly>
  <state-parent></state-parent>
</template>

<script>
import ClientRender from "../components/ClientRender";
import ServerRender from "../components/ServerRender";
import StateParent from "../components/StateParent";
export default {
  components: {StateParent, ServerRender, ClientRender}
}

</script>
