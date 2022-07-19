<template>
  <div>Call API</div>
  <div>dataAxios: {{ dataAxios }}</div>
  <div>dataUseAsyncData: {{ dataUseAsyncData }}</div>
</template>

<script lang="ts">
import axios, {AxiosResponse} from "axios";
import {useAsyncData} from "#app";
import { ref } from 'vue'

export default {
  name: "CallApi",
  setup () {
    const dataAxios = ref({})
    const dataUseAsyncData = ref({})

    // It seems that call call_api on client side
    async function getByAxios () {
      await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=1660011')
          .then(function (response) {
            dataAxios.value = response.data
          })
          .catch(function (error) {
            console.log('error', error)
          })
    }

    // call call_api on server side
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

      dataUseAsyncData.value = zipcode.value
    }

    getByAxios()
    getByUseAsyncData()

    return {
      dataAxios,
      dataUseAsyncData
    }
  }
}
</script>

<style scoped>

</style>
