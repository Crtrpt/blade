<template>
  <div class="flex flex-col">
    <StartMenu class="border-b border-grey-500 h-10" />
    <div class="flex-grow overflow-y-auto xbar shadow">
      <ConnectList />
    </div>
    <GlobleSetting class="border-t border-grey-500 h-10 flex-shrink-0" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StartMenu from "../components/StartMenu.vue";
import ConnectList from "../components/ConnectList.vue";
import GlobleSetting from "../components/GlobleSetting.vue";

export default {
  components: {
    StartMenu,
    ConnectList,
    GlobleSetting,
  },
  name: "Main",
  setup() {
    console.log("Main 初始化");
  },
};
</script>
