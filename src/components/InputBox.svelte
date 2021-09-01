<script>
	import { listData } from './stores.js';

    const addListHandler = (event) => {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;

			$listData.todo = [...$listData.todo, {state: 'todo', checked: false, text: text}];
			event.target.value = '';
		}
	}

	const removeListHandler = () => {
        for (let state in $listData) {
            $listData[state] = $listData[state].filter(l => !l.done);
        }
	}
</script>

<section>
    <input class='textInput' type='text' on:keydown={addListHandler}/>
    <nav>
        <button class="btn" on:click={removeListHandler}>제거</button>
    </nav>
</section>

<style>
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
</style>