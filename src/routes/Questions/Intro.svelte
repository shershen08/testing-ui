<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	let name = '';
	const nextQuestion = () => dispatch('submit', {name});
</script>

<input bind:value={name} placeholder="enter your name">
<p>Hello {name || 'stranger'}!</p>
<button on:click={nextQuestion}>
	Next
</button>
