<script>
  export default {
    data () {
      return {
        page: 0,
        day: 0,
        header: {
          src: '/vue-iron.png',
          title: 'Vue.js 全家桶'
        },
        list: [
          { type: '主廚的話', title: '餐點介紹與相關說明', link: 'javascript:;' },
          { type: '餐具擺盤', title: '餐具擺盤相關說明', link: 'javascript:;' },
          { type: '開胃餐點', title: '開胃餐點與相關說明', link: 'javascript:;' },
        ]
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
        this.day = day
      }
    },
    mounted () {
      let day = parseInt(this.$route.params.day) - 1
      console.log(day)
      this.day = day
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
