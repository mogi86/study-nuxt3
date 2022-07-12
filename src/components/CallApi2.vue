<template>
  <div>Data from API2</div>
  <div>{{ lazyClientPending ? 'lazyClientLoading' : lazyClientData }}</div>
  <div>{{ noLazyClientPending ? 'noLazyClientLoading' : noLazyClientData }}</div>
  <div>{{ lazyServerPending ? 'lazyServerLoading' : lazyServerData }}</div>
  <div>{{ noLazyServerPending ? 'noLazyServerLoading' : noLazyServerData }}</div>
</template>

<script lang="ts">
import { useAsyncData } from '#app'
import { watch } from 'vue'

export default {
  name: "CallApi2",
  setup () {
    // lazy call call_api on client side
    // ref: https://v3.nuxtjs.org/api/composables/use-lazy-async-data/
    const { data: lazyClientData, pending: lazyClientPending, error: lazyClientError, refresh: lazyClientRefresh } = useAsyncData(
        'hello1',
        () => $fetch(`http://localhost:8000/hello`, {}),
        {
          server: false,
          lazy: true
        }
    )

    // not lazy call call_api on client side
    // The template side seems to be in a loading state all the time
    // ref: https://v3.nuxtjs.org/api/composables/use-lazy-async-data/
    const { data: noLazyClientData, pending: noLazyClientPending, error: noLazyClientError, refresh: noLazyClientRefresh } = useAsyncData(
        'hello2',
        () => $fetch(`http://localhost:8000/hello`, {}),
        {
          server: false,
          lazy: false
        }
    )

    // lazy call call_api on server side
    // ref: https://v3.nuxtjs.org/api/composables/use-lazy-async-data/
    const { data: lazyServerData, pending: lazyServerPending, error: lazyServerError, refresh: lazyServerRefresh } = useAsyncData(
        'hello3',
        () => $fetch(`http://localhost:8000/hello`, {}),
        {
          server: true,
          lazy: true
        }
    )

    // not lazy call call_api on server side
    // ref: https://v3.nuxtjs.org/api/composables/use-lazy-async-data/
    const { data: noLazyServerData, pending: noLazyServerPending, error: noLazyServerError, refresh: noLazyServerRefresh } = useAsyncData(
        'hello4',
        () => $fetch(`http://localhost:8000/hello`, {}),
        {
          server: true,
          lazy: false
        }
    )

    watch(lazyClientData, (newLazyClientData) => {
      console.log('newLazyClientData', newLazyClientData)
    })

    watch(noLazyClientData, (newNoLazyClientData) => {
      console.log('newNoLazyClientData', newNoLazyClientData)
    })

    return {
      lazyClientPending,
      noLazyClientPending,
      lazyServerPending,
      noLazyServerPending,
      lazyClientData,
      noLazyClientData,
      lazyServerData,
      noLazyServerData
    }
  }
}
</script>

<style scoped>

</style>
