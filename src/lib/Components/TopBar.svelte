<script lang="ts">
	import { topBarStore } from '$lib/stores/topBarStore'
	import { coffeeShopStore } from '$lib/stores/coffeeShopStore'
	import Icon from '@iconify/svelte'

	const handleMenuBtnClick = () => {
		topBarStore.set({
			searchQuery: topbarState.searchQuery,
			isOpen: !topbarState.isOpen
		})

		window.scrollTo(0, 0)
	}

	const handleQueryChange = (event: Event) => {
		topBarStore.set({
			searchQuery: (event.target as HTMLInputElement).value,
			isOpen: topbarState.isOpen
		})
	}

	const fetchStores = async (e: KeyboardEvent, city: string) => {
		if (e.key !== 'Enter') return

		await coffeeShopStore.fetchCofeeStoresByCity(city).then(() => {
			topBarStore.set({
				searchQuery: city,
				isOpen: false
			})
		})
	}

	// const collapseTopBarOnScroll = () => {
	// 	if (!window) return

	// 	window.addEventListener('scroll', () => {
	// 		if (window.scrollY > 0) {
	// 			topBarStore.set({
	// 				searchQuery: topbarState.searchQuery,
	// 				isOpen: false
	// 			})
	// 		}
	// 	})
	// }

	// $: collapseTopBarOnScroll()

	$: topbarState = $topBarStore
	$: topbarVisibility = $topBarStore.isOpen ? '' : 'max-h-12'
	$: topbarIcon = $topBarStore.isOpen ? 'memory-menu-up' : 'memory-menu-down'
</script>

<nav class="overflow-hidden {topbarVisibility} sticky top-0 transition-all ease-in-out">
	<div class="flex flex-col gap-2 items-center p-2 bg-stone-500 text-white">
		<div class="flex flex-col justify-center items-center">
			<Icon icon="simple-icons:coffeescript" class="w-9 h-9" />
			<h1 class="text-semibold text-2xl">Cofee Finder</h1>
		</div>

		<div class="w-full">
			<input
				on:input={handleQueryChange}
				value={topbarState.searchQuery}
				on:keydown={(e) => fetchStores(e, topbarState.searchQuery)}
				type="text"
				placeholder="Search in your city..."
				class="p-1 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
			/>
		</div>

		<div class="icon-div">
			<button on:click={handleMenuBtnClick}>
				<Icon icon={topbarIcon} class="w-6 h-6" />
			</button>
		</div>
	</div>
</nav>

<style>
	.icon-div {
		position: absolute;
		right: 0.25rem;
		top: 0.25rem;
	}
</style>
