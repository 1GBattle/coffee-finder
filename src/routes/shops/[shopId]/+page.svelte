<script lang="ts">
	import { coffeeShopStore } from '$lib/stores/coffeeShopStore'
	import PhotoCarousel from '$lib/Components/photoCarousel.svelte'
	import StarRating from 'svelte-star-rating'
	import Icon from '@iconify/svelte'

	$: coffeeStore = $coffeeShopStore.selectedCoffeeStore
</script>

<div class="h-screen">
	<div class="flex flex-col gap-2 items-center p-2 bg-stone-500 text-white">
		<div class="flex flex-col justify-center items-center">
			<Icon icon="simple-icons:coffeescript" class="w-9 h-9" />
		</div>
	</div>

	<div class="h-full flex flex-col items-center gap-2 p-1">
		<PhotoCarousel photos={coffeeStore.photos} />

		<div class="flex flex-col items-center gap-4">
			<h1 class="font-semibold text-3xl text-center">{coffeeStore?.name}</h1>

			<p class="font-normal text-md text-center">{coffeeStore?.location.formatted_address}</p>

			<StarRating rating={coffeeStore.rating} />
		</div>
	</div>
</div>
