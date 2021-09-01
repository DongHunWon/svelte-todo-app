<script>
    import { listData } from './stores.js';
    import ListItem from "./ListItem.svelte";

    export let state;
    const checkedChange = (idx) => {
        $listData[state][idx].checked = !$listData[state][idx].checked;
    }
</script>

<article>
    {#each $listData[state] as d, i }
        <ListItem {state} {...d} onChange={() => checkedChange(i)}/>
    {/each}
</article>

<style>
    article {
        margin: 0 20px;
        background-color: white;
        height: 300px;
        width: 30%;
    }
</style>