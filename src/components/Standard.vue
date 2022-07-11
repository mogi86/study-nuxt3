<template>
  <img src="/image/sample.jpeg">
</template>

<script lang="ts">
import axios from 'axios'
import {useAsyncData} from "#app"

export default {
  name: "Standard",
  setup () {
    // It seems that call api on client side
    async function getByAxios () {
      await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=1660011')
          .then(function (response) {
            console.log('response', response)
          })
          .catch(function (error) {
            console.log('error', error)
          })
    }

    // call api on server side
    // ref: https://v3.nuxtjs.org/api/composables/use-async-data/#params
    async function getByUseAsyncData () {
      const { data: zipcode, pending, error, refresh } = await useAsyncData(
          'zipcode',
          () => $fetch(`https://zipcloud.ibsnet.co.jp/api/search`, {
            headers: { Authorization: 'dummy' },
            params: {
              zipcode: 1760001
            }
          }),
          {
            server: true
          }
      )

      console.log('zipcode error', error)
      console.log('zipcode', zipcode)
    }

    getByAxios()
    getByUseAsyncData()
  }
}
</script>

<style scoped>

</style>
