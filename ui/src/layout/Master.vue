<template>
    <div>
      <router-view></router-view>
      <router-link to="home" >home</router-link>
    </div>
</template>
<script lang="ts">
    export default {
    name:"Master",
    setup() {
      console.log("App 初始化");
    },
    render(){
      return " <router-view></router-view>"
    }
  }
</script>
<style>
</style>
