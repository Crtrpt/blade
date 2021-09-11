<template>
    <div>
        <StartMenu  class="border-b border-grey-500 h-10"/>
        <ConnectList />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StartMenu from "./StartMenu.vue"
import ConnectList from "./ConnectList.vue"
 export default {
    components:{
        StartMenu,ConnectList
    },
    name:"Main",
    setup() {
      console.log("Main 初始化");
    }
  }
</script>