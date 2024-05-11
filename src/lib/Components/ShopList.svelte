<script lang="ts">
	import { onMount } from 'svelte'
	import { coffeeShopStore } from '$lib/stores/coffeeShopStore'
	import ShopCard from './ShopCard.svelte'
	import { sortByState } from '$lib/stores/sortByState'

	let lat = 0
	let long = 0

	onMount(async () => {
		window.navigator.geolocation.getCurrentPosition(async (position) => {
			const { latitude, longitude } = position.coords
			lat = latitude
			long = longitude
		})

		await coffeeShopStore.fetchCoffeeStoresByLatLong({ lat, long })
	})

	$: switch ($sortByState) {
		case 'distance':
			coffeeShopStore.sortByDistance()
			break
		case 'name':
			coffeeShopStore.sortByName()
			break
		case 'rating':
			coffeeShopStore.sortByRating()
			break
		default:
			coffeeShopStore.sortByDistance()
			break
	}
</script>

<div class="p-2 flex flex-col items-start justify-center gap-2">
	{#each $coffeeShopStore.coffeeStores as coffeeStore (coffeeStore.fsq_id)}
		<ShopCard {coffeeStore} />
	{/each}
</div>
