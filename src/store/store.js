import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://todo-laravel.test/api'

export const store = new Vuex.Store({
  state: {
    filter: 'all',
    todos: [
/*      {
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
      },*/
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

      const index = state.todos.findIndex((item) => item.id == todo.id);
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
      })
    },
    deleteTodo(state,id) {
      const index = state.todos.findIndex((item) => item.id == id);
      state.todos.splice(index, 1);
    },
    checkAll(state,checked) {
      state.todos.forEach(todo => (todo.completed = checked));
    },
    updateFilter(state,filter) {
      state.filter = filter
    },
    clearCompleted(state) {
/*      axios.get('/todos')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })*/
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    retrieveTodos(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    retrieveTodos(contex) {
      axios.get('/todos')

        .then(response => {
          contex.commit('retrieveTodos', response.data)
  //        console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTodo(context, todo) {
      axios.post('/todos', {
        title: todo.title,
        completed: false,
      })
        .then(response => {
          contex.commit('addTodo', response.data)
        })
        .catch(error => {
          console.log(error)
        })
/*      setTimeout(() => {
        context.commit('addTodo', todo)
      }, 1000)*/
    },
    updateTodo(context,todo) {
      axios.patch('/todos/' + todo.id, {
        title: todo.title,
        completed: todo.completed,
  //      completed: false,
      })
        .then(response => {
          context.commit('updateTodo', response.data)
  //        contex.commit('addTodo', response.data)
        })
        .catch(error => {
          console.log(error)
        })

      /*      setTimeout(() => {
              context.commit('updateTodo', todo)
            }, 1000)*/
    },
    deleteTodo(context,id) {
      axios.delete('/todos/' + id)
        .then(response => {
          context.commit('deleteTodo', id)
  //        context.commit('updateTodo', response.data)
        })
        .catch(error => {
          console.log(error)
        })

/*      setTimeout(() => {
        context.commit('deleteTodo', id)
      }, 1000)*/
    },
    checkAll(context,checked) {
      axios.patch('/todosCheckAll', {
        completed: checked,
      })
        .then(response => {
          context.commit('checkAll', checked)
        })
        .catch(error => {
          console.log(error)
        })

/*      setTimeout(() => {
        context.commit('checkAll', checked)
      }, 1000)*/
    },
    updateFilter(context,filter) {
  //    setTimeout(() => {
        context.commit('updateFilter', filter)
  //    }, 1000)
    },
    clearCompleted(context) {
      const completed = store.state.todos
        .filter(todo => todo.completed)
        .map(todo => todo.id)

      axios.delete('/todosDeleteCompleted', {
        data: {
  //        todos: [4,5]
          todos: completed
        }
      })
        .then(response => {
          context.commit('clearCompleted')
  //        context.commit('deleteTodo', id)
        })
        .catch(error => {
          console.log(error)
        })

/*        setTimeout(() => {
          context.commit('clearCompleted')
        }, 1000)*/
    },
  }
})
