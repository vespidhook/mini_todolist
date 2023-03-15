
import TodoItem from './TodoItem.vue';

<template>
  <div class="space-y-2">
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
</template>

<script>
  import TodoItem from '@/components/TodoItem';
  export default {
    components: { TodoItem }
  }
</script>

