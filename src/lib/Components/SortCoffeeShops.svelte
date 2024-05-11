<script lang="ts">
	import { sortByState } from '$lib/stores/sortByState'

	const handleSortStateChange = (sortOption: string) => {
		sortByState.set(sortOption)
	}
</script>

<div class="flex justify-end items-end">
	<label for="sort" class="mr-1">Sort by:</label>
	<select on:click={(e) => handleSortStateChange(e.currentTarget.value)}>
		<option value="distance">Distance</option>
		<option value="name">Name</option>
		<option value="rating">Rating</option>
	</select>
</div>
