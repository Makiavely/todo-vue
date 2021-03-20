<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
</template>

<script>
export default {
  name: 'todo-clear-completed',
/*  props: {
    showClearCompletedButton: {
      type: Boolean,
      required: true,
    }
  },*/
  computed: {
    showClearCompletedButton() {
      return this.$store.getters.showClearCompletedButton
    }
  },
  methods: {
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
  //    this.$store.commit('clearCompleted')
  //    eventBus.$emit('clearCompletedTodos')
  //    this.$store.dispatch('clearCompleted')
  //    this.$store.state.todos = this.$store.state.todos.filter(todo => !todo.completed);
    }
  }
}
</script>
