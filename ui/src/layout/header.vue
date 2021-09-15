<template>
  <div class="flex justify-start items-center pl-2">
    <router-link to="home">home</router-link>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["version"]),
  },
  name: "Header",
  setup() {
    console.log("Main 初始化");
  },
};
</script>
