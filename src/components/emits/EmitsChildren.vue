<template>
  <div>
    <button v-on:click="childrenSubmit">OK</button>
  </div>
</template>

<script>
export default {
  name: "EmitsChildren",
  // The below warning message will output if "emits" option isn't defined.
  // `Component emitted event "customSubmit" but it is neither declared in the emits option nor as an "onCustomSubmit" prop.`
  emits: ['customSubmit'],
  setup (props, ctx) {
    function childrenSubmit () {
      ctx.emit('customSubmit')
    }

    return {
      childrenSubmit
    }
  }
}
</script>

<style scoped>

</style>
