<script>
	import { saveData } from './components/DataController.js';
	import { listData } from './components/stores.js';

	const addListHandler = (event) => {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;

			$listData = [...$listData, {done: false, text: text}];
			event.target.value = '';
		}
	}

	const removeListHandler = () => {
		$listData = $listData.filter(l => !l.done);
	}

	// listData 값이 변경될 때마다 데이터 저장
	$: saveData($listData);
</script>

<main class="wrap">
	<header class="title">
		TODO 리스트
	</header>

	<section>
		<input class='textInput' type='text' on:keydown={addListHandler}/>
		<nav>
			<button class="btn" on:click={removeListHandler}>제거</button>
		</nav>
		<ul>
			{#each $listData as list}
				<li class="list">
					<input type="checkbox" bind:checked={list.done}>
					{list.text}
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	.wrap {
		width: 50%;
		background-color: #a0e48f;
		border-radius: 1rem;
		margin: 3rem auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-weight: bold;
		font-size: 2.5rem;
		color: #ffffff;
	}

	.textInput {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        width: 20rem;
        height: 2rem;
        border: 1px;
        border-radius: 0.5rem;
    }

	nav {
        margin: 1rem 0;
        color: #ffffff;
        text-align: center;
    }

	.btn {
        color: #ffffff;
        background-color: #368342;
        border-radius: 0.3rem;
        width: 4rem;
        height: 1.5rem;
    }
	
	.list {
		background-color: white;
		width: 10rem;
		height: 2rem;
        margin-top: 1rem;
        border-radius: 8px;
    }
</style>