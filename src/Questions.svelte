<h1>Hello {name}!</h1>
{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
<svelte:component this={selected.component}/>

<script>
	import Intro from './Intro.svelte';
	import Rating from './Rating.svelte';
	import Intake from './Rating.svelte';

	const options = [
		{ color: 'intro',   component: Intro   },
		{ color: 'rating', component: Rating },
		{ color: 'intake',  component: Intake  },
	];

	let selected = options[1];	

		let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

	export let name;

	
</script>

<style>
	h1 {
		color: purple;
	}
</style>
