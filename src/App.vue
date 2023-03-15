<template>
<!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
            <TodoSpinner />

            <TodoFormAdd />

            <TodoItems />

            <TodoEmpty />
        </div>
    </div>
    <!--/ Content -->
</template>

<script>
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import TodoItems from "@/components/TodoItems";
import TodoEmpty from "@/components/TodoEmpty";

export default {
    name: "App",
    components: {TodoEmpty, TodoItems, TodoSpinner, TodoFormAdd }
}
</script>
