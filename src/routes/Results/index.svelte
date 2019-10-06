<script>
	const name = 'Misha';
	//export default name;
</script>

<input bind:value={name} placeholder="enter your name">
<p>Hello {name || 'stranger'}!</p>