import axios from 'axios'

export default {
  namespaced: true,
  //strict: true,
  state: {
    day: 0,
    header: {
      src: '/vue-iron.png',
      title: 'Vue.js 全家桶'
    },
    list: []
  },
  getters: {
    currentDay (state) {
      return state.list[state.day]
    }
  },
  mutations: {
    SETDAY (state, day) {
      state.day = day
    },
    SETLIST (state, list) {
      state.list = list
    }
  },
  actions: {
    GETLIST (context, day) {
      context.commit('SETDAY', day)
      return axios.get('/list.json').then(res => {
        context.commit('SETLIST', res.data)
      })
    }
  }
}
