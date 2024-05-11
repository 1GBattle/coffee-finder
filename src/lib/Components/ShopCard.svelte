<script lang="ts">
	import type CoffeeStoreModel from '$lib/Models/CoffeeStoreModel'
	import StarRating from 'svelte-star-rating'
	import coffeeShopImg from '../Photos/CoavaCoffee-AdamSzafranski-01.jpg'
	import { coffeeShopStore } from '$lib/stores/coffeeShopStore'

	export let coffeeStore: CoffeeStoreModel = {} as CoffeeStoreModel

	const convertMetersToMiles = (meters: number) => {
		return Number(meters * 0.000621371).toFixed(2) + ' miles'
	}

	$: photoUrl = coffeeStore.photos
		? coffeeStore.photos[0]?.prefix + 'original' + coffeeStore.photos[0]?.suffix
		: ''
</script>

<a
	href="/shops/{coffeeStore.fsq_id}"
	class="h-32 w-full shadow-lg rounded-md border-2 flex flex-row gap-0"
	on:click={() => coffeeShopStore.selectCoffeeStore(coffeeStore)}
>
	{#if photoUrl}
		<div>
			<img src={photoUrl} alt="Coffee Shop" class="h-full w-32 object-cover" />
		</div>
	{:else}
		<div>
			<img src={coffeeShopImg} alt="Coffee Shop" class="h-full w-32 object-cover" />
		</div>
	{/if}

	<div class="grow flex flex-col items-center gap-1">
		<div>
			<h1 class="text-center font-semibold">{coffeeStore.name}</h1>
		</div>
		<div class="flex flex-col items-center">
			<p>
				{coffeeStore.location.address}
			</p>
			<p>{convertMetersToMiles(coffeeStore.distance)}</p>
		</div>

		<div>
			<StarRating rating={coffeeStore.rating} />
		</div>
	</div>
</a>
