<script>
  import { createEventDispatcher } from 'svelte'

  export let item
  export let index

  const dispatch = createEventDispatcher()

  const removeTodo = () => {
    dispatch('remove', index)
  }
</script>

<div class="ti">
    <span>{index + 1}: {item}</span>
    <span on:click={removeTodo} class="ti__btn-remove">Удалить</span>
</div>

<style>
    .ti {
        background-color: steelblue;
        color: white;
        border-radius: 4px;
        padding: 8px;
        display: inline-flex;
        justify-content: space-between;
    }

    .ti__btn-remove {
        color: red;
        cursor: pointer;
        font-weight: bold;
    }

    .ti__btn-remove:hover {
        color: darkred;
    }
</style>
