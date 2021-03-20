<template>
  <div>{{ remaining }} items left</div>
</template>

<script>
export default {
  name: 'todo-remaining',
/*  props: {
    remaining: {
      type: Number,
      required: true,
    }
  }*/
  computed: {
    remaining() {
      return this.$store.getters.remaining
    }
  }
}
</script>
