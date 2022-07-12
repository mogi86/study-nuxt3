import { useRouter, defineNuxtPlugin } from '#app'
import { RouteLocationNormalized } from 'vue-router'

export default defineNuxtPlugin((nuxtApp: any) => {
    console.log('Plugin initialised')

    // const router = nuxtApp.$router
    const router = useRouter()
    console.log('router', router)

    router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      console.log('beforeEach is called', to, from)
    })
})
