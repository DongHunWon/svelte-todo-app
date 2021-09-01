<script>
    export let state;
    export let text;
    export let checked;
    export let onChange;
</script>

<div class="wrap">
    {#if state !== 'todo'}
        <button class="btn">&lt;</button>
    {/if}
    <label>
        <input type="checkbox" checked={checked} on:click={onChange}>
        {text}
    </label>
    {#if state !== 'done'}
        <button class="btn">&gt;</button>
    {/if}
</div>

<style>
    .wrap {
        display: flex;
        align-items: center;
        margin: 0.5rem;
    }

    .btn {
        width: 2rem;
        height: 1rem;
        color: #ffffff;
        background-color: #368342;
        border-radius: 0.3rem;
        height: 1.5rem;
    }

    label {
		display: block;
        width: 100%;
		background-color: rgb(230, 230, 230);
        padding: 1rem;
        margin: 0 0.5rem;
        border-radius: 8px;
    }
</style>