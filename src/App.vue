<template>
<!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
            <TodoSpinner v-if="loading" />

            <template v-else>
              <TodoFormAdd />

              <TodoItems />

              <TodoEmpty />
            </template>
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
    components: {TodoEmpty, TodoItems, TodoSpinner, TodoFormAdd },

  data() {
    return {
      loading: false
    }
  },

  created() {
      this.loading = true;
      this.$store.dispatch('getTodos').finally(() => {
      this.loading = false;
    });
  },
}
</script>
