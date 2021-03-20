<template>
  <!--  <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos"> Check All</label></div>-->
<!--  <div><label><input type="checkbox" :checked="!anyRemaining"> Check All</label></div>-->
  <div><label><input type="checkbox" :checked="!anyRemaining" @change="allChecked"> Check All</label></div>
</template>

<script>
export default {
  name: 'todo-check-all',
/*  props: {
    anyRemaining: {
      type: Boolean,
      required: true,
    }
  },*/
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining
    }
  },
  methods: {
    allChecked() {
      this.$store.dispatch('checkAll', event.target.checked)
  //    this.$store.commit('checkAll', event.target.checked)
  //    eventBus.$emit('checkAllChanged', this.anyRemaining)
  //    this.$store.state.todos.forEach(todo => (todo.completed = event.target.checked));
    }
  }
}
</script>
