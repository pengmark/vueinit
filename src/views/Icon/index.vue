<script>
  export default {
    computed: {
      day: {
        get () {
          return this.$store.state.day
        },
        set (val) {
          //this.$store.state.day = val
          this.$store.commit('SETDAY', val)
        }
      },
      header () {
        return this.$store.state.header
      },
      list () {
        return this.$store.state.list
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
        //this.day = day
        this.$router.replace({
          params: {
            day: day + 1
          }
        })
      }
    },
    mounted () {
      let day = parseInt(this.$route.params.day) - 1
      this.day = day
      this.$store.dispatch('GETLIST', day)
      document.addEventListener('keyup', this.changeHandler)
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
