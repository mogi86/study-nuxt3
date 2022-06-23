import { defineStore } from 'pinia'

export const useCounterPiniaStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters: {
        show(state): number {
            return state.count
        }
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
})
