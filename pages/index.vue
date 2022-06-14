<template>
  <h1>Index page</h1>
  <!-- rendering on client side -->
  <ClientOnly>
    <part></part>
  </ClientOnly>
</template>

<script>
import Part from "../components/Part";
export default {
  components: {Part}
}
</script>
