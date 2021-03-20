import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filter: 'all',
    todos: [
      {
        'id': 1,
        'title': 'Finish Vue Screencast',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over world',
        'completed': false,
        'editing': false,
      },
    ]
  },
  getters: {
    remaining(state) {
      return state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining(state,getters) {
      return getters.remaining != 0
    },
    todosFiltered(state) {
      if (state.filter == 'all') {
        return state.todos
      } else if (state.filter == 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter == 'completed') {
        return state.todos.filter(todo => todo.completed)
      }

      return state.todos
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0
    }
/*    remaining(state) {
      return this.$store.state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining(state) {
      return this.remaining != 0`
    },
    todosFiltered(state) {
      if (this.$store.state.filter == 'all') {
        return this.$store.state.todos
      } else if (this.$store.state.filter == 'active') {
        return this.$store.state.todos.filter(todo => !todo.completed)
      } else if (this.$store.state.filter == 'completed') {
        return this.$store.state.todos.filter(todo => todo.completed)
      }

      return this.$store.state.todos
    },
    showClearCompletedButton(state) {
      return this.$store.state.todos.filter(todo => todo.completed).length > 0
    }*/
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false,
      })
    },
    updateTodo(state,todo) {
  //    const index = this.$store.state.todos.findIndex((item) => item.id == this.id);
  //    this.$store.state.todos.splice(index, 1, {
      const index = state.todos.findIndex((item) => item.id == todo.id);
      state.todos.splice(index, 1, {
/*        'id': this.id,
        'title': this.title,
        'completed': this.completed,
        'editing': this.editing,*/
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
      })
    },
    deleteTodo(state,id) {
      /*const index = this.$store.state.todos.findIndex((item) => item.id == id);
      this.$store.state.todos.splice(index, 1);*/
      const index = state.todos.findIndex((item) => item.id == id);
      state.todos.splice(index, 1);
    },
    checkAll(state,checked) {
  //    this.$store.state.todos.forEach(todo => (todo.completed = event.target.checked));
  //    state.todos.forEach(todo => (todo.completed = event.target.checked));
      state.todos.forEach(todo => (todo.completed = checked));
    },
    updateFilter(state,filter) {
  //    this.$store.state.filter = filter
      state.filter = filter
    },
    clearCompleted(state) {
  //    this.$store.state.todos = this.$store.state.todos.filter(todo => !todo.completed);
      state.todos = state.todos.filter(todo => !todo.completed);
    }
  },
  actions: {
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo)
      }, 1000)
  //    context.commit('addTodo', todo)
    },
    updateTodo(context,todo) {
      setTimeout(() => {
        context.commit('updateTodo', todo)
      }, 1000)
  //    context.commit('updateTodo', todo)
    },
    deleteTodo(context,id) {
      setTimeout(() => {
        context.commit('deleteTodo', id)
      }, 1000)
  //    context.commit('deleteTodo', id)
    },
    checkAll(context,checked) {
      setTimeout(() => {
        context.commit('checkAll', checked)
      }, 1000)
  //    context.commit('checkAll', checked)
    },
    updateFilter(context,filter) {
      setTimeout(() => {
        context.commit('updateFilter', filter)
      }, 1000)
  //    context.commit('updateFilter', filter)
    },
    clearCompleted(context) {
        setTimeout(() => {
          context.commit('clearCompleted')
        }, 1000)
  //    context.commit('clearCompleted')
    },
    /*    clearCompleted({commit}) {
      commit('clearCompleted')
    }*/
  }
})
