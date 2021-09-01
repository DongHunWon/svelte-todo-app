<script>
    import { listData } from './stores.js';
    import ListItem from "./ListItem.svelte";

    export let name;
</script>

<article>
    {#each $listData[name] as d, i (i) }
        <ListItem {...d} />
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