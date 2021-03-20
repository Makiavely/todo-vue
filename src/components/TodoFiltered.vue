<template>
  <div>
<!--    <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
    <button :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</button>
    <button :class="{ active: filter == 'completed' }" @click="filter = 'completed'">Completed</button>-->

    <button :class="{ active: filter == 'all' }" @click="changeFilter('all')">All</button>
    <button :class="{ active: filter == 'active' }" @click="changeFilter('active')">Active</button>
    <button :class="{ active: filter == 'completed' }" @click="changeFilter('completed')">Completed</button>

  </div>
</template>

<script>
export default {
  name: 'todo-filtered',
/*  props: {
    anyRemaining: {
      type: Boolean,
      required: true,
    }
  },*/
/*  data() {
    return {
      'filter': 'all',
    }
  },*/
  computed: {
    filter() {
      return this.$store.state.filter
    }
  },
  methods: {
  //  allChecked() {
    changeFilter(filter) {
      this.$store.dispatch('updateFilter', filter)
  //    this.$store.commit('updateFilter', filter)
  //    this.filter = filter
  //    this.$store.state.filter = filter

  //    eventBus.$emit('checkAllChanged', this.anyRemaining)
  //    eventBus.$emit('filterChanged', filter)
    }
  }
}
</script>
