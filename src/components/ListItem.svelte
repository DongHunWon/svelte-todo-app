<script>
    export let state;
    export let text;
    export let checked;
    export let idx;
    export let checkedChange;
    export let stateChange
</script>

<div class="wrap">
    <!-- 목록을 왼쪽으로 보내기 위한 버튼 -->
    <!-- doing -> todo -->
    {#if state !== 'todo'}
        <button class="btn" on:click={() => stateChange(idx, 0)}>&lt;</button>
    {/if}
    <label>
        <input type="checkbox" checked={checked} on:click={() => checkedChange(idx)}>
        {text}
    </label>
    <!-- 목록을 오른쪽으로 보내기 위한 버튼 -->
    <!-- todo -> doing -->
    {#if state !== 'done'}
        <button class="btn" on:click={() => stateChange(idx, 1)}>&gt;</button>
    {/if}
</div>

<style>
    .wrap {
        display: flex;
        align-items: center;
        margin: 1rem;
    }

    .btn {
        width: 2rem;
        height: 1rem;
        color: #ffffff;
        background-color: rgb(77, 189, 94);
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
        box-shadow: 1px 1px 5px gray;
    }
</style>