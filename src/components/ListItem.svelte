<script>
    export let state;
    export let checked;
    export let text;
</script>

<label class="list">
    <input type="checkbox" bind:checked={checked}>
    {text}
</label>

<style>
    input[type='checkbox'] {
		display: none;
	}

    .list {
		display: block;
		background-color: rgb(230, 230, 230);
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
    }
</style>