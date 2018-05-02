import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  actions: {
    addTodo ({ commit, state }, todo) {
      todo.key = state.todos.length + 1
      commit('addTodo', todo)
    }
  },

  state: {
    todos: [ {
      key: 1,
      name: 'Suspender a todos',
      state: 'done'
    }, {
      key: 2,
      name: 'Preparar exámenes',
      state: 'todo'
    } ]
  },

  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    }
  },

  getters: {
    todos (state) {
      return state.todos
    }
  }
})

export default store
