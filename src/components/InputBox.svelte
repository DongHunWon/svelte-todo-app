<script>
	import { listData } from './stores.js';

    // Enter 키를 눌렀을 때 todo 추가
    const addListHandler = (event) => {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;
			$listData.todo = [...$listData.todo, {checked: false, text: text}];
			event.target.value = '';
		}
	}

    // 선택된 목록 삭제
	const removeListHandler = () => {
        for (let state in $listData) {
            $listData[state] = $listData[state].filter(l => !l.checked);
        }
	}
</script>

<section>
    <input class='inputBox' type='text' on:keydown={addListHandler}/>
    <div>
        <button class="btn" on:click={removeListHandler}>제거</button>
    </div>
</section>

<style>
    section {
        width: 100%;
        display: inline-block;
        text-align: center;
        margin: 0.5rem;
    }

    .inputBox {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        width: 70%;
        height: 2rem;
        border: 1px;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 1.5rem;
        box-shadow: 3px 3px 5px gray;
    }

	div {
        margin: 1rem 0;
        color: #ffffff;
    }

	.btn {
        color: #ffffff;
        background-color: #368342;
        border-radius: 0.3rem;
        width: 4rem;
        height: 1.5rem;
        box-shadow: 1px 1px 5px gray;
    }
</style>