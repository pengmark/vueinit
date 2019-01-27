<template>
  <div>
    <h1>Mark View</h1>
    <div>
      <router-link :to="{name: 'mark-info'}">Info</router-link>
      <router-link :to="{name: 'mark-youtube'}">Youtube</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
