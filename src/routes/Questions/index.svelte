<h1>Some questions to pass</h1>

Current question: {activeIndex}/{totalQuestions}
<svelte:component this={options[activeIndex].component} 
					on:submit={handleSubmit}
					bind:data={options[activeIndex].data}/>

<script>
	import Intro from './Intro.svelte';
	import Rating from './Rating.svelte';

	const options = [
		{ name: 'intro',   component: Intro   },
		{ name: 'rating', component: Rating, data: {foo: 'bar'} },
		{ name: 'rating', component: Rating, data: {foo: 42} },
		//{ color: 'intake',  component: Intake  },
	];
	let activeIndex = 0

	$: totalQuestions = options.lengh;

	function nextQuestion() {
		activeIndex += 1
	}

	function handleSubmit({detail}){
		console.log('handleSubmit', detail)
		nextQuestion();
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>
