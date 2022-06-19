import { defineNuxtPlugin } from '#app';

class Human {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    introduce(): string {
        return `My name is ${this.name}, And I'm ${this.age} years old.`
    }
}

function hello(msg: String) {
    console.log(`hello, ${msg}!!`)
}

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('human', Human);
    nuxtApp.provide('hello', hello);
});
