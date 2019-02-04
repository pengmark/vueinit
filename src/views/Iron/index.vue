<script>
import ironStore from '@/ironStore.js'

export default {
  computed: {
    day: {
      get () {
        return this.$store.state.list ? this.$store.state.list.day : 0
      },
      set (val) {
        // this.$store.state.day = val
        this.$store.commit('list/SETDAY', val)
      }
    },
    header () {
      return this.$store.state.list ? this.$store.state.list.header : null
    },
    currentDay () {
      return this.$store.state.list ? this.$store.getters['list/currentDay'] : null
    },
    list () {
      return this.$store.state.list ? this.$store.state.list.list : []
    }
  },
  methods: {
    changeHandler (e) {
      let day = this.day
      if (e.keyCode === 39) {
        day = day < 29 ? day + 1 : day
      } else if (e.keyCode === 37) {
        day = day > 0 ? day - 1 : day
      }
      // this.day = day
      this.$router.replace({
        params: {
          day: day + 1
        }
      })
    }
  },
  mounted () {
    let day = parseInt(this.$route.params.day) - 1
    //this.day = day
    this.$store.registerModule('list', ironStore)
    this.$store.dispatch('list/GETLIST', day)
    document.addEventListener('keyup', this.changeHandler)
  },
  beforeDestroy () {
    this.$store.unregisterModule('list')
    document.removeEventListener('keyup', this.changeHandler)
  },
  watch: {
    $route (now) {
      let day = parseInt(this.$route.params.day - 1)
      this.day = day
    }
  }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
