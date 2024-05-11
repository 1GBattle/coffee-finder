import type CoffeeStoreModel from '$lib/Models/CoffeeStoreModel'
import { writable } from 'svelte/store'

const createCoffeeShopStore = () => {
	const state = {
		coffeeStores: [] as CoffeeStoreModel[],
		selectedCoffeeStore: {} as CoffeeStoreModel,
		error: {} as Error | null
	}

	const { subscribe, set, update } = writable(state)

	const fetchCoffeeStoresByLatLong = async (latLong: {
		lat: number | 'undefined'
		long: number | 'undefined'
	}) => {
		const baseUrl = new URL('https://api.foursquare.com/v3/places/search')
		baseUrl.searchParams.append('query', 'coffee shops')
		baseUrl.searchParams.append('limit', '20')
		baseUrl.searchParams.append('ll', '29.86,-95.45')

		// if (latLong.lat !== 'undefined' && latLong.long !== 'undefined') {
		// 	baseUrl.searchParams.delete('ll')
		// 	baseUrl.searchParams.append('ll', `${latLong.lat},${latLong.long}`)
		// }

		try {
			const response = await fetch(baseUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'fsq30ol+8p2Zneh/Gq33Xw8deD3+4DwDKBFmm3sTO+wrqSs='
				}
			})

			const data = await response.json()

			data.results.map((coffeeStore: CoffeeStoreModel) => {
				getCoffeeShopPhotos(coffeeStore.fsq_id)
			})

			update((state) => {
				state.coffeeStores = data.results
				return state
			})

			// sets a random number between 1 and 5 for the rating of each coffee shop
			update((state) => {
				state.coffeeStores.forEach((coffeeStore) => {
					coffeeStore.rating = Math.floor(Math.random() * 5) + 1
				})
				return state
			})
		} catch (error: any) {
			console.error('Error fetching coffee shops', error)
			update((state) => {
				state.error = error
				return state
			})
		}
	}

	const fetchCofeeStoresByCity = async (city: string) => {
		const baseUrl = new URL('https://api.foursquare.com/v3/places/search')
		baseUrl.searchParams.append('query', 'coffee shops')
		baseUrl.searchParams.append('limit', '20')
		baseUrl.searchParams.append('near', city)

		try {
			const response = await fetch(baseUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'fsq30ol+8p2Zneh/Gq33Xw8deD3+4DwDKBFmm3sTO+wrqSs='
				}
			})

			const data = await response.json()

			data.results.map((coffeeStore: CoffeeStoreModel) => {
				getCoffeeShopPhotos(coffeeStore.fsq_id)
			})

			update((state) => {
				state.coffeeStores = data.results
				return state
			})

			// sets a random number between 1 and 5 for the rating of each coffee shop
			update((state) => {
				state.coffeeStores.forEach((coffeeStore) => {
					coffeeStore.rating = Math.floor(Math.random() * 5) + 1
				})
				return state
			})
		} catch (error: any) {
			console.error('Error fetching coffee shops', error)
			update((state) => {
				state.error = error
				return state
			})
		}
	}

	const selectCoffeeStore = (coffeeStore: CoffeeStoreModel) => {
		update((state) => {
			state.selectedCoffeeStore = coffeeStore
			return state
		})
	}

	const getCoffeeShopPhotos = async (coffeeStoreId: string) => {
		const baseUrl = new URL(`https://api.foursquare.com/v3/places/${coffeeStoreId}/photos`)
		baseUrl.searchParams.append('limit', '10')

		try {
			const response = await fetch(baseUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'fsq30ol+8p2Zneh/Gq33Xw8deD3+4DwDKBFmm3sTO+wrqSs='
				}
			})

			const photosData = (await response.json()) as [{ prefix: string; suffix: string }]
			update((state) => {
				state.coffeeStores[
					state.coffeeStores.findIndex((coffeeStore) => coffeeStore.fsq_id === coffeeStoreId)
				].photos = photosData

				return state
			})
		} catch (error: any) {
			console.error('Error fetching coffee shop photos', error)
			update((state) => {
				state.error = error
				return state
			})
		}
	}

	const sortByName = () => {
		update((state) => {
			state.coffeeStores.sort((a, b) => {
				if (a.name < b.name) {
					return -1
				} else if (a.name > b.name) {
					return 1
				} else {
					return 0
				}
			})
			return state
		})
	}

	const sortByDistance = () => {
		update((state) => {
			state.coffeeStores.sort((a, b) => a.distance - b.distance)
			return state
		})
	}

	const sortByRating = () => {
		update((state) => {
			state.coffeeStores.sort((a, b) => b.rating - a.rating)
			return state
		})
	}

	return {
		subscribe,
		set,
		update,
		fetchCoffeeStoresByLatLong,
		fetchCofeeStoresByCity,
		selectCoffeeStore,
		sortByDistance,
		sortByName,
		sortByRating
	}
}

export const coffeeShopStore = createCoffeeShopStore()
