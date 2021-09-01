<script>
    export let state;
    export let text;
    export let checked;
    export let idx;
    export let checkedChange;
    export let stateChange
</script>

<div class="wrap">
    {#if state !== 'todo'}
        <button class="btn" on:click={() => stateChange(idx, 0)}>&lt;</button>
    {/if}
    <label>
        <input type="checkbox" checked={checked} on:click={() => checkedChange(idx)}>
        {text}
    </label>
    {#if state !== 'done'}
        <button class="btn" on:click={() => stateChange(idx, 1)}>&gt;</button>
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
        word-break: break-all;
        line-height: 1.4;
    }
</style>