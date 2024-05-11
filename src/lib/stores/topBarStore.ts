import { writable } from 'svelte/store'

export const topBarStore = writable<{ searchQuery: string; isOpen: boolean }>({
	searchQuery: '',
	isOpen: false
})
