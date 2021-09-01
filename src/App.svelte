<script>
	import { saveData } from './components/DataController.js';
	import { listData } from './components/stores.js';
	import InputBox from './components/InputBox.svelte';
	import Contents from './components/Contents.svelte';

	// listData 값이 변경될 때마다 데이터 저장
	$: saveData($listData);
</script>

<main class="wrap">
	<header class="title">
		TODO 리스트
	</header>

	<InputBox />

	<section class="content">
		<Contents state='todo' />
		<Contents state='doing' />
		<Contents state='done' />
	</section>
</main>

<style>
	.wrap {
		width: 60%;
		height: 70vh;
		background-color: #a0e48f;
		border-radius: 1rem;
		margin: 3rem auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-weight: bold;
		font-size: 2.5rem;
		color: #ffffff;
	}

	.content {
		display: flex;
		width: 100%;
		height: 70%;
	}
</style>