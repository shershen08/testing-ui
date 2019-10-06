<h1>Some questions to pass</h1>

{#if testStarted}
	Current question: {activeIndex}/{options.length}
	<svelte:component this={options[activeIndex].component} 
						on:submit={handleSubmit}
						bind:isLast={isLast}
						bind:data={options[activeIndex].data}/>
{:else}
	<select bind:value={selected} on:change="{() => answer = ''}">
		{#each tests as test}
			<option value={test.src}>
				{test.title}
			</option>
		{/each}
	</select>

	<button on:click={startTest}>
		Start test
	</button>
{/if}

<script>
	import Intro from './Intro.svelte';
	import Rating from './Rating.svelte';

	import {clearData, saveData} from '../../services/ls.js';

	let tests = [
		{src: 'demo/01/simple-test-1.json', title: 'VueJS basics'},
		{src: 'demo/02/no-exists.json', title: 'Dummy'}
	]
	let timeout = 100
	let activeIndex = 0
	let selected;
	let answer = '';
	let testStarted = false;
	let options = [
		{ name: 'intro',   component: Intro   },
		// { name: 'rating', component: Rating, data: {foo: 'bar'} },
		// { name: 'rating', component: Rating, data: {foo: 42} },
		//{ color: 'intake',  component: Intake  },
	];

	$: isLast = activeIndex >= options.length -1

	async function getTestData(url) {
		const res = await fetch(url);
		const text = await res.text();

		if (res.ok) {
			return JSON.parse(text);
		} else {
			throw new Error(text);
		}
	}

	function nextQuestion() {
		activeIndex += 1
	}

	function startTest(){
		if(selected) {
			loadData()
			clearData()
		}
	}

	function handleSubmit({detail}){
		console.log('handleSubmit', detail)
		
		saveData({
			activeIndex,
			detail
		})
		if(!isLast) {
			nextQuestion();
		} else {
			testStarted = false
			options = []
		}
	}

	function loadData() {
		let promise = getTestData(selected);
		promise.then(data => {
			testStarted = true;
			const comps = data.questions.map(i => ({
					data: i,
					component : Rating
				}))
			options = [...options, ...comps]
//			console.log(options)

		}).catch(err => {
			console.error(err)
		})
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>
