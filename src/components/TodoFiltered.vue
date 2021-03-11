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
  data() {
    return {
      'filter': 'all',
    }
  },
  methods: {
    /*allChecked() {*/
    changeFilter(filter) {
      this.filter = filter
      /*eventBus.$emit('checkAllChanged', this.anyRemaining)*/
      eventBus.$emit('filterChanged', filter)
    }
  }
}
</script>
