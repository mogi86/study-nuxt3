import {reactive, InjectionKey, provide, inject} from "vue"

function counter() {
    console.log('counter is called!')
    // 状態
    const state = reactive({
        count: 0
    })

    function increment() {
        state.count++
    }

    function decrement() {
        state.count--
    }

    return {
        state,
        increment,
        decrement,
    }
}

type CounterStore = ReturnType<typeof counter>

const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore');

export function counterProvide() {
    console.log('counterProvide is called!')
    provide(CounterKey, counter())
}

export function counterInject(): CounterStore {
    console.log('counterInject is called!')
    return inject(CounterKey)
}
