<script lang="ts">
	import Carousel from 'svelte-carousel'
	export let photos: [{ prefix: String; suffix: String }]

	let carousel // for calling methods of the carousel instance
	const handleNextClick = () => {
		carousel.goToNext()
	}
</script>

<Carousel
	bind:this={carousel}
	let:loaded
	autoplay
	autoplayDuration={2000}
	autoplayProgressVisible={false}
	swiping
	arrows={false}
>
	{#each photos as photo, imageIndex (photo)}
		<div class="h-86 max-h-86 p-4">
			{#if loaded.includes(imageIndex)}
				<img
					src={photo.prefix + 'original' + photo.suffix}
					alt={'Coffee shop image'}
					class="h-full w-full object-cover rounded-md shadow-lg"
				/>
			{/if}
		</div>
	{/each}
</Carousel>
