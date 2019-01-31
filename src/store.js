import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    day: 0,
    header: {
      src: '/vue-iron.png',
      title: 'Vue.js 全家桶'
    },
    list: []
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
      return axios.get('list.json').then(res => {
        console.log(res);
        context.commit('SETLIST', res.data)
      })
    }
  }
})
