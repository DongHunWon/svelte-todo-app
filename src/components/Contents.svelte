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
    <div class="content">
        {#each $listData[state] as d, idx }
            <ListItem {state} {...d} {idx} {checkedChange} {stateChange}/>
        {/each}
    </div>
</article>

<style>
    article {
        margin: 0 1rem;
        width: 30%;
    }
    
    .title {
        text-align: center;
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .content {
        background-color: white;
        height: 90%;
        overflow-y: auto;
        border-radius: 1rem;
        box-shadow: 2px 2px 5px gray;
    }
    
    .content::-webkit-scrollbar {
        background-color:rgba(230, 230, 230, 0.603);
        border-radius: 0.5rem;
    }

    .content::-webkit-scrollbar-thumb {
        background-color: rgb(179, 179, 179);
        border-radius: 0.5rem;
    }
</style>