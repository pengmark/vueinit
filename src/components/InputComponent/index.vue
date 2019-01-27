<script>
  export default {
    name: 'input-component',
    props: {
      text: {
        type: String,
        required: true
        //default
      }
    },
    computed: {
      inputText: {
        get () {
          return this.text
        },
        set (val) {
          console.log(val)
          // 通知外部主件
          this.$emit('update:text', val);
        }
      }
    }
  }
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
