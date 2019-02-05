<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/mark">Mark</router-link>
            |
            <router-link to="/all">全部</router-link>
            |
            <router-link to="/active">未完成</router-link>
            |
            <router-link to="/complete">已完成</router-link>
        </div>
        <TodoInput v-if="isFilterPage"/>
        <TodoListItem
                v-for="index in todoIndex"
                :key="index"
                :index="index"/>
        <router-view/>
    </div>
</template>
<script>
// @ = src
import TodoInput from '@/components/TodoInput/index.vue'
import TodoListItem from '@/components/TodoListItem/index.vue'
// 27
export default {
  components: {
    TodoInput,
    TodoListItem
  },
  computed: {
    todoIndex () {
      return this.$store.getters['todoIndex']
    },
    isFilterPage () {
      return this.$store.getters['isFilterPage']
    }
  },
  mounted () {
    this.$store.dispatch('INIT_TODOS')
  }
}
</script>
<style src="@/assets/style.css"></style>
