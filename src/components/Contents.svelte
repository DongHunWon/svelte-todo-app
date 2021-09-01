<script>
    import { listData } from './stores.js';
    import ListItem from "./ListItem.svelte";

    export let state;
    const moveState = {
        'todo': ['', 'doing'],
        'doing': ['todo', 'done'],
        'done': ['doing', '']
    };

    const checkedChange = (idx) => {
        $listData[state][idx].checked = !$listData[state][idx].checked;
    };
    
    const stateChange = (idx, targetIdx) => {
        const nextState = moveState[state][targetIdx];
        const moveData = $listData[state].splice(idx, 1);
        $listData[state] = $listData[state];
        $listData[nextState] = $listData[nextState].concat(moveData);
    };
</script>

<article>
    <div class="title">{state}</div>
    <div>
        {#each $listData[state] as d, idx }
            <ListItem {state} {...d} {idx} {checkedChange} {stateChange}/>
        {/each}
    </div>
</article>

<style>
    article {
        margin: 0 20px;
        background-color: white;
        height: 300px;
        width: 30%;
    }
    
    .title {
        text-align: center;
    }
</style>