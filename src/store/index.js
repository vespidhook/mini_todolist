import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    getTodos({ commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
              .then((response) => {
                commit('storeTodos', response.data)
                resolve()
              })
        }, 1000)
      })
    },

    addTodo() {
      axios.post('http://localhost:3000/todos', data)
    }
  },
  modules: {
  }
})
