<template>
    <div class="flex  h-full">
      <Left class=" w-1/6  border-r border-grey-500 "></Left>
      <div class="main flex-grow  flex flex-col">
        <Header class="h-10 border-b border-grey-500"></Header>
        <router-view class="flex-grow"></router-view>
        <Footer class="h-10 border-t border-grey-500"></Footer>
      </div>
    </div>
</template>
<script lang="ts">
import Left from "./Left.vue"
import Header from "./header.vue"
import Footer from "./Footer.vue"
    export default {
      components:{
        Left,Header,Footer
      },
    name:"Main",
    setup() {
      console.log("Main 初始化");
    }
  }
</script>
<style>
</style>
