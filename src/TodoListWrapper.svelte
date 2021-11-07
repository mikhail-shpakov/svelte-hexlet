<script>
  import TodoItem from './TodoItem.svelte'

  let newTodo
  let todoList = []

  const addTodo = () => {
    if (newTodo) {
      todoList = [...todoList, newTodo]
      newTodo = ''
    }
  }

  const removeTodo = (index) => {
    todoList.splice(index.detail, 1)
    todoList = todoList
  }

  const handleKeydown = (event) => {
    event.code === 'Enter' && addTodo()
  }

  $: todoCount = todoList.length
</script>

<div class="tlw">
    <label for="new-todo">Новое дело</label>
    <input on:keydown={handleKeydown} bind:value={newTodo} id="new-todo" type="text" placeholder="Начните печатать...">

    {#each todoList as todo, i}
        <TodoItem on:remove={removeTodo} index={i} item={todo}/>
    {/each}

    <button class="tlw__btn-add" on:click={addTodo}>Добавить новое дело</button>
    <span>Всего дел: {todoCount}</span>
</div>

<style>
    .tlw {
        text-align: left;
        display: grid;
        grid-gap: 12px;
    }

    .tlw__btn-add {
        padding: 12px;
        color: white;
        background-color: green;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .tlw__btn-add:hover,
    .tlw__btn-add:active {
        background-color: darkgreen;
    }

    input {
        width: 100%;
    }
</style>
