import { writable } from "svelte/store";
let value = 0;
export let count = writable(value);
