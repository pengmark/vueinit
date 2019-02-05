import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const LS = {
  load () {
    return JSON.parse(localStorage.getItem('vue-todos') || '[]')
  },
  save (data) {
    localStorage.setItem('vue-todos', JSON.stringify(data))
  }
}
const filter = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(todo => {
      return !todo.complete
    })
  },
  complete (todos) {
    return todos.filter(todo => {
      return todo.complete
    })
  }
}

export default new Vuex.Store({
  strict: true,
  state: {
    day: 0,
    header: {
      src: '/vue-iron.png',
      title: 'Vue.js 全家桶'
    },
    list: [],
    todos: [
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: true },
      { content: 'todo-content', complete: false }
    ]
  },
  getters: {
    todoIndex (state) {
      if (['all', 'complete', 'active'].indexOf(state.route.name) > -1) {
        return filter[state.route.name](state.todos).map(todo =>
          state.todos.indexOf(todo)
        )
      }
    },
    isFilterPage (state) {
      if (['all', 'complete', 'active'].indexOf(state.route.name) > -1) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    SETDAY (state, day) {
      state.day = day
    },
    SETLIST (state, list) {
      state.list = list
    },
    SET_TODOS (state, data) {
      state.todos = data
      LS.save(state.todos)
    },
    ADD_TODO (state, data) {
      state.todos.push(data)
      LS.save(state.todos)
    },
    UPDATE_TODO (state, { index, data }) {
      state.todos[index].complete = data.complete
      state.todos[index].content = data.content
      LS.save(state.todos)
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
      LS.save(state.todos)
    }
  },
  actions: {
    GETLIST (context, day) {
      context.commit('SETDAY', day)
      return axios.get('list.json').then(res => {
        console.log(res)
        context.commit('SETLIST', res.data)
      })
    },
    INIT_TODOS ({ commit }) {
      // 讀取LS
      commit('SET_TODOS', LS.load())
    }
  }
})
