<template>
  <h1>Index page</h1>
  <!-- rendering on client side -->
  <ClientOnly>
    <client-render></client-render>
  </ClientOnly>
  <server-render></server-render>
</template>

<script>
import ClientRender from "../components/ClientRender";
import ServerRender from "../components/ServerRender";
export default {
  components: {ServerRender, ClientRender}
}
</script>
