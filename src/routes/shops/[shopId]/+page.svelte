<script lang="ts">
	import { coffeeShopStore } from '$lib/stores/coffeeShopStore'
	// import PhotoCarousel from '$lib/Components/PhotoCarousel.svelte'
	import StarRating from 'svelte-star-rating'
	import Icon from '@iconify/svelte'

	$: coffeeStore = $coffeeShopStore.selectedCoffeeStore
</script>

<div class="h-screen">
	<div class="flex flex-col gap-2 items-center p-2 bg-stone-500 text-white">
		<div class="flex flex-col justify-center items-center">
			<Icon icon="simple-icons:coffeescript" class="w-9 h-9" />
		</div>

		<div class="back-icon-div">
			<a href="/">
				<Icon icon="material-symbols:arrow-back-rounded" class="w-7 h-7" />
			</a>
		</div>
	</div>

	<div class="h-full flex flex-col items-center gap-2 p-1">
		<!-- <PhotoCarousel photos={coffeeStore.photos} /> -->

		<div class="flex flex-col items-center gap-4">
			<h1 class="font-semibold text-3xl text-center">{coffeeStore?.name}</h1>

			<a
				href={'https://www.google.com/maps/search/?api=1&query=' +
					coffeeStore?.geocodes.main.latitude +
					',' +
					coffeeStore?.geocodes.main.longitude}
				target="_blank"
				rel="noopener noreferrer"
			>
				<p class="font-normal text-md text-center cursor-pointer text-sky-500">
					{coffeeStore?.location.formatted_address}
				</p>
			</a>

			<StarRating rating={coffeeStore.rating} />

			<div class="p-2 text-center">
				Disclaimer all star ratings are randomly generated and in no way reflect the actual quality
				of the coffee shop. Get out there and try the coffee.
			</div>
		</div>
	</div>
</div>

<style>
	.back-icon-div {
		position: absolute;
		left: 0.25rem;
		top: 0.5rem;
	}

	.back-icon-div {
		position: absolute;
	}
</style>
