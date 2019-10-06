<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	export let data = '';
	export let isLast = false;
	
	let selection = [];

	// let menu = [
	// 	'Cookies and cream',
	// 	'Mint choc chip',
	// 	'Raspberry ripple'
	// ];

	// function join(flavours) {
	// 	if (flavours.length === 1) return flavours[0];
	// 	return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	// }
	const nextQuestion = () => dispatch('submit', {selection});
</script>

<h2>{data.title}</h2>

{#if data.img != null}
	<img src={data.img} alt="{data.title}" class="main-img"/>
{/if}

{#each data.answers as item}
	<label>
		<input type=checkbox bind:group={selection} value={item}>
		{item.text}
	</label>
{/each}

<!-- {JSON.stringify(data)} -->
<!-- 
<label>
	<input type=radio bind:group={scoops} value={1}>
	One scoop
</label>

<label>
	<input type=radio bind:group={scoops} value={2}>
	Two scoops
</label>

<label>
	<input type=radio bind:group={scoops} value={3}>
	Three scoops
</label>

<h2>Flavours</h2>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={flavours} value={flavour}>
		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if} -->
{#if isLast}
	<button on:click={nextQuestion}>
		Finish
	</button>
{:else}
	<button on:click={nextQuestion}>
		Next
	</button>
{/if}

<style>
.main-img {
	max-width: 200px;;
}
</style>